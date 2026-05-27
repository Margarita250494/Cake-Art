'use client'

import { Product } from '@/utils/types'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [products, setProducts] = useState<Product[]>([])
  const [editing, setEditing] = useState<Product | null>(null)
  const [form, setForm] = useState({
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    price: ''
  })

  const fetchProducts = async () => {
    const res = await fetch('/api/products')
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    const load = async () => {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data)
    }

    void load()
  }, [])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (editing) {
      await fetch('/api/products', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          ...form,
          id: editing.id,
          price: Number(form.price)
        })
      })

      setEditing(null)
    } else {
      await fetch('/api/products', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          ...form,
          price: Number(form.price)
        })
      })
    }

    await fetchProducts()

    setForm({
      title: '',
      description: '',
      imageUrl: '',
      category: '',
      price: ''
    })
  }
  const handleDelete = async (id: string) => {
    await fetch('/api/products', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id})
    })

    setProducts(prev => prev.filter(p => p.id !== id))
  }
  const handleEdit = (product: Product) => {
    setEditing(product)
    setForm({
      title: product.title,
      description: product.description,
      imageUrl: product.imageUrl,
      category: product.category,
      price: String(product.price)
    })
  }
  return (
    <div className="p-10 ">
      <h1 className="text-2xl mb-6">Admin Panel</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border border-gray focus:outline-0 py-1 px-1"
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border border-gray focus:outline-0 py-1 px-1"
        />
        <input
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          className="border border-gray focus:outline-0 py-1 px-1"
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="border border-gray focus:outline-0 py-1 px-1"
        />
        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border border-gray focus:outline-0 py-1 px-1"
        />

        <button
          type="submit"
          className="bg-black text-white p-2"
        >
          {editing ? 'Update product' : 'Create product'}
        </button>
      </form>
      <div className="mt-10 flex flex-col gap-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="border p-3 flex justify-between"
          >
            <div>
              <p className="font-bold">Title: <span className="font-light">{p.title}</span>
              </p>
              <p className="font-bold">Price: <span className="font-light">{p.price}</span>
              </p>
              <p className="font-bold">Description: <span className="font-light">{p.description}</span>
              </p>
              <p className="font-bold">Image: <span className="font-light">{p.imageUrl}</span>
              </p>
              <p className="font-bold">Category: <span className="font-light">{p.category}</span>
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(p)}
                className="text-blue-500"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(p.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
