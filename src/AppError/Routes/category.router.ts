import { Router } from "express";
import { CategoryController } from "../Controller/CategoryControler";
import { ensureMiddleware } from "../Middleware/Middleware";
import { categoryCreateSchema } from "../Schemas/category.schemas";

export const categoryRouter = Router();

const categoryController = new CategoryController();


categoryRouter.post(
  "",
  ensureMiddleware.bodyIsValid(categoryCreateSchema),
  categoryController.create
);

categoryRouter.use(
  "/:categoryId",
  ensureMiddleware.categoryIdParams,
);

categoryRouter.delete("/:categoryId", categoryController.delete);