import express from 'express';
import CategoryController from '../controller/category.controller';
const categoryRouter = express.Router();


categoryRouter.post('/create-category', CategoryController.createCategory);
categoryRouter.get('/', CategoryController.getAllCategories);
categoryRouter.get('/:id', CategoryController.getSingleCategory);
categoryRouter.patch('/:id', CategoryController.updateCategory);
categoryRouter.delete('/:id', CategoryController.deleteCategory);


export default categoryRouter;