import { z } from "zod"; 
import { categoryCreateSchema } from "../Schemas/category.schemas"; 

type CategoryCreate = z.infer<typeof categoryCreateSchema>;

export { CategoryCreate };