import { Request, Response } from "express";
import { Route } from "./../../utils";

const UserRoutes: Route[] = [
  {
    path: "/users/welcome",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.status(200).send("Hello from route handler");
    }
  },
  {
    path: "/users/second-request",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.status(200).send("Second request worked");
    }
  }
];

export default UserRoutes;
