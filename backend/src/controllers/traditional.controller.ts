import { Request, Response } from "express";
import traditional from "../resources/traditional";

export const getAllTraditional = (_: Request, res: Response) => {
  try {
    res.json(traditional);
  } catch (e) {
    res.json(e);
  }
};
