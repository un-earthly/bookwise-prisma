import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createCategory = async (title: string) => {
    const category = await prisma.category.create({
        data: {
            title,
        },
    });
    return category;

};

// Get all categories
export const getAllCategories = async () => {
    const categories = await prisma.category.findMany();
    return categories;
};

// Get a single category by ID
export const getSingleCategory = async (id: string) => {
    const category = await prisma.category.findUnique({
        where: {
            id,
        },
    });
    return category;
};

// Update a category by ID
export const updateCategory = async (id: string, name: string) => {
    const updatedCategory = await prisma.category.update({
        where: {
            id,
        },
        data: {
            title: name,
        },
    });
    return updatedCategory;

};

// Delete a category by ID
export const deleteCategory = async (id: string) => {
    const deletedCategory = await prisma.category.delete({
        where: {
            id,
        },
    });
    return deletedCategory;
};
