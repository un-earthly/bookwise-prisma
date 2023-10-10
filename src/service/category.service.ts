import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const CategoryService = {

  createCategory: async (title: string) => {
    const category = await prisma.category.create({
      data: {
        title
      }
    })
    return category
  },

  // Get all categories
  getAllCategories: async () => {
    const categories = await prisma.category.findMany()
    return categories
  },

  // Get a single category by ID
  getSingleCategory: async (id: string) => {
    const category = await prisma.category.findUnique({
      where: {
        id
      }
    })
    return category
  },

  updateCategory: async (id: string, name: string) => {
    const updatedCategory = await prisma.category.update({
      where: {
        id
      },
      data: {
        title: name
      }
    })
    return updatedCategory
  },

  deleteCategory: async (id: string) => {
    const deletedCategory = await prisma.category.delete({
      where: {
        id
      }
    })
    return deletedCategory
  }
}
