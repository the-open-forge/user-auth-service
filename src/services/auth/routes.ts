import { Request, Response } from "express";
import { getConnection } from "typeorm";

import { findTopUser } from "./user-repository";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("Hi-Ya typescript");
    }
  },
  {
    path: "/users/first",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const user = await findTopUser()
        .then(topUser => topUser)
        .catch((err: Error) => `failed at routing level ${err}`);

      getConnection()
        .close()
        .catch((err: Error) => console.log(`failed to disconnect ${err}`));

      user
        ? res.status(201).send(JSON.stringify(user))
        : res.status(404).send(`failed to fetch user`);
    }
  }
];
