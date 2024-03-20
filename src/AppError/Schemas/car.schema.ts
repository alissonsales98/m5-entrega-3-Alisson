import { z } from "zod";
import { categorySchema } from "./category.schemas";

const carReturnSchema = z.object({
    id: z.number(),
    name: z.string().min(1),
    content: z.string().min(1),
    finished: z.boolean().default(false),
    categoryId: z.number().positive().nullish(),
});

const carCreateSchema = carReturnSchema.omit({ id: true });
const carUpdateSchema = carCreateSchema.partial();


const carReturnCategorySchema = carReturnSchema
.extend({ category: categorySchema.nullish() })
.omit({ categoryId: true });

export {
    carCreateSchema,
    carReturnCategorySchema,
    carReturnSchema,
    carUpdateSchema,
};    