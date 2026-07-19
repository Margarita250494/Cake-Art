import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

//GET Product
export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(products);
}

//CREATE NEW PRODUCT
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, imageUrl, category, price, imageId } = body;

    const product = await prisma.product.create({
      data: {
        title,
        description,
        imageUrl,
        category,
        price: Number(price),
        imageId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 },
    );
  }
}

//UPDATE PRODUCT
export async function PATCH(req: Request) {
  const body = await req.json();

  const { id, ...data } = body;

  const updated = await prisma.product.update({
    where: { id },
    data: {
      ...data,
      price: Number(data.price),
    },
  });

  return NextResponse.json(updated);
}

//DELETE PRODUCT
export async function DELETE(req: Request) {
  const body = await req.json();

  const product = await prisma.product.findUnique({
    where: {
      id: body.id,
    },
  });

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  if (product.imageId) {
    await cloudinary.uploader.destroy(product.imageId);
  }

  await prisma.product.delete({
    where: {
      id: body.id,
    },
  });

  return NextResponse.json({ success: true });
}
