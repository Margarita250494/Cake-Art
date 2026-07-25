import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch categories",
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name, slug } = await request.json();

    if (!name || !slug) {
      return NextResponse.json(
        {
          message: "Name and slug are required",
        },
        {
          status: 400,
        },
      );
    }

    const category = await prisma.category.create({
      data: {
        name,
        slug,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create category",
      },
      {
        status: 500,
      },
    );
  }
}
