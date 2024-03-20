import { Router } from "express"; 
import { ensureMiddleware } from "../Middleware/Middleware";
import { CarControllers } from "../Controller/carConstroller";
import { carCreateSchema, carUpdateSchema } from "../Schemas/car.schema";

export const carRouter = Router();

const carController = new CarControllers();

carRouter.use(authMiddleware.validateToken);

carRouter.post(
  "",
  ensureMiddleware.bodyIsValid(carCreateSchema),
  ensureMiddleware.categoryIdBody,
  carController.create
);
carRouter.get("", carController.read);

carRouter.use(
  "/:carId",
  ensureMiddleware.carIdParams,
);

carRouter.get("/:carId", carController.retrieve);
carRouter.patch(
  "/:carId",
  ensureMiddleware.bodyIsValid(carUpdateSchema),
  ensureMiddleware.categoryIdBody,
);
carRouter.delete("/:carId", carController.delete);
