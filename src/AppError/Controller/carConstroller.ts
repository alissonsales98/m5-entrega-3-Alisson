import { Request, Response, response } from "express";
import { CarServices } from "../Services/carService";

export class CarControllers {
  create(arg0: string, arg1: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: import("express").NextFunction) => void, categoryIdBody: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: import("express").NextFunction) => Promise<void>, create: any) {
    throw new Error("Method not implemented.");
  }
  read(arg0: string, read: any) {
    throw new Error("Method not implemented.");
  }
  retrieve(arg0: string, retrieve: any) {
    throw new Error("Method not implemented.");
  }
  delete(arg0: string, delete: any) {
    throw new Error("Method not implemented.");
  }
  read(arg0: string, read: any) {
      throw new Error("Method not implemented.");
  }
  retrieve(arg0: string, retrieve: any) {
      throw new Error("Method not implemented.");
  }

  public async create(req: Request, res: Response): Promise<Response<TCar>> {
    const carServices = new CarServices();

    const response = await carServices.create(req.body);

    return res.status(201).json(response);
  };

  public async getMany(req: Request, res: Response): Promise<Response<TCar[]>> {
    const carServices = new CarServices();

    return res.status(200).json(response);
  };

  public async getOne(req: Request, res: Response): Promise<Response<TCar[]>> {
    const id = req.params.id

    const CarServices = new CarServices();

    const response = await CarServices.getOne(id);

    return res.status(200).json(response);
  };
};