/*import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  const categories = await prisma.category.findMany();

  const categoryMap = {
    cakes: categories.find((category) => category.slug === "cakes")?.id,
    sweet: categories.find((category) => category.slug === "sweets")?.id,
    "non-sweet": categories.find((category) => category.slug === "savoury")?.id,
  };

  for (const [oldName, categoryId] of Object.entries(categoryMap)) {
    if (!categoryId) continue;
    await prisma.product.updateMany({
      where: {
        category: oldName,
      },
      data: {
        categoryId,
      },
    });
    console.log("Products categories migrated");
  }
}
main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());*/
