import { Response, Request, NextFunction } from "express";
import { ZodError } from "zod";
import { AppError } from "../../errors/AppErrors";
import { JsonWebTokenError } from "jsonwebtoken";

class HandleErrors {
    public static execute = (
      error: Error,
      req: Request,
      res: Response,
      next: NextFunction
    ): Response => {
      if (error instanceof AppError) {
        return res.status(error.status).json({ message: error.message });
      }
  
      if (error instanceof ZodError) {
        return res.status(400).json({ message: error.flatten().fieldErrors });
      }
  
      if (error instanceof JsonWebTokenError) {
        return res.status(401).json({ message: error.message });
      }
  
      console.log(error);
      return res.status(500).json({ message: "Internal server error." });
    };
  }
  
  export const handleErros = HandleErrors.execute;