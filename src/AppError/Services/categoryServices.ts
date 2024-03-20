import { Category } from "@prisma/client";
import { prisma } from "../database/prisma";
import { CategoryCreate } from "../interfaces/category.interfaces";

export class CategoryService {
    public create = async (
      payload: CategoryCreate,
    ): Promise<Category> => {
      return await prisma.category.create({ data: { ...payload } });
    };
  
    public delete = async (categoryId: number): Promise<void> => {
      await prisma.category.delete({ where: { id: categoryId } });
    };
  }