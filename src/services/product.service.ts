export const loadProducts = async () => {
  const res = await fetch("/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export const deleteProduct = async (id: string) => {
  const res = await fetch("/api/products", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (!res.ok) {
    throw new Error("Failed to delete product");
  }

  return res.json();
};

export const createProduct = async (product: {
  title: string;
  description: string;
  imageUrl: string;
  imageId?: string;
  category: string;
  price: number;
}) => {
  const res = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("Failed to create product");
  }

  return res.json();
};

export const updateProduct = async (
  id: string,
  product: {
    title: string;
    description: string;
    imageUrl: string;
    imageId?: string;
    category: string;
    price: number;
  },
) => {
  const res = await fetch("/api/products", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      ...product,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to update product");
  }

  return res.json();
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();

  formData.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to upload image");
  }

  return res.json();
};
