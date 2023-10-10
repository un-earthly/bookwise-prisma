import express from 'express'
import CategoryController from '../controller/category.controller'
const CategoryRouter = express.Router()

CategoryRouter.post('/create-category', CategoryController.createCategory)
CategoryRouter.get('/', CategoryController.getAllCategories)
CategoryRouter.get('/:id', CategoryController.getSingleCategory)
CategoryRouter.patch('/:id', CategoryController.updateCategory)
CategoryRouter.delete('/:id', CategoryController.deleteCategory)

export default CategoryRouter
