import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await prisma.category.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return NextResponse.json(categories);
}

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    const cleanName = name.trim();

    const existingCategory = await prisma.category.findFirst({
      where: {
        name: {
          equals: cleanName,
          mode: "insensitive",
        },
      },
    });

    if (existingCategory) {
      return NextResponse.json(
        {
          error: "Category already exists",
        },
        {
          status: 409,
        },
      );
    }

    const category = await prisma.category.create({
      data: {
        name,
        slug: name.toLowerCase().trim().replaceAll(" ", "-"),
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to create category",
      },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    const category = await prisma.category.findUnique({
      where: {
        id,
      },
      include: {
        products: true,
      },
    });

    if (!category) {
      return NextResponse.json(
        {
          error: "Category not found",
        },
        {
          status: 404,
        },
      );
    }

    if (category.products.length > 0) {
      return NextResponse.json(
        {
          error: "Cannot delete category with products",
        },
        {
          status: 409,
        },
      );
    }

    await prisma.category.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to delete category",
      },
      {
        status: 500,
      },
    );
  }
}
