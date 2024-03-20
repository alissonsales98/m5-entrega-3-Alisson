import { Request, Response } from "express";
import { CategoryService } from "../Services/categoryServices";

export class CategoryController {
  private categoryService: CategoryService = new CategoryService();

  public create = async (req: Request, res: Response): Promise<Response> => {
    const newCategory = await this.categoryService.create(req.body);

    return res.status(201).json(newCategory);
  };

  public delete = async (
    { params: { categoryId } }: Request,
    res: Response
  ): Promise<Response> => {
    await this.categoryService.delete(Number(categoryId));
    return res.status(204).json();
  };
}