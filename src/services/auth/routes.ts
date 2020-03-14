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
      const user = await findTopUser().then();

      getConnection("default").close();

      user
        ? res.status(201).send(user)
        : res.status(404).send(`failed to fetch user`);
    }
  }
];
