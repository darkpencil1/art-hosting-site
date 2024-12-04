import { Request, Response } from "express";
import digital from "../resources/digital";

export const getAllDigital = (_: Request, res: Response) => {
  try {
    res.json(digital);
  } catch (e) {
    res.json(e);
  }
};
