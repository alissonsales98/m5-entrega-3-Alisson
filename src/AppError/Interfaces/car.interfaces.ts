import { z } from "zod"; 
import { carCreateSchema, carUpdateSchema, carReturnSchema, carReturnCategorySchema } from "../Schemas/car.schema";

type carCreate = z.infer<typeof carCreateSchema>;
type carUpdate = z.infer<typeof carUpdateSchema>;

type carReturn = z.infer<typeof carReturnSchema>;
type carReturnCategory = z.infer<typeof carReturnCategorySchema>;

export { carCreate, carReturn, carReturnCategory, carUpdate };