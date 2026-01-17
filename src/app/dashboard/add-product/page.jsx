// export default function AddProductPage() {
//   return (
//     <div className="py-20 text-center">
//       <h1 className="text-3xl font-bold">
//         Add Product (Protected Page)
//       </h1>
//       <p className="mt-4 text-gray-600">
//         You are logged in successfully.
//       </p>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!productName || !description || !price || !category || !imageUrl) {
      alert("Please fill in all fields!");
      return;
    }

    // Normally, you would send data to your backend or database here
    const newProduct = {
      name: productName,
      description,
      price: parseFloat(price),
      category,
      image: imageUrl,
    };

    console.log("New Product:", newProduct);

    setSuccessMessage(`Product "${productName}" added successfully!`);

    // Clear form
    setProductName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setImageUrl("");
  };

  return (
    <div className="py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Add New Product
      </h1>

      {successMessage && (
        <p className="text-green-600 text-center mb-6">{successMessage}</p>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-8 rounded space-y-4"
      >
        <div>
          <label className="block mb-1 font-semibold">Product Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Price</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Image URL</label>
          <input
            type="url"
            className="w-full border p-2 rounded"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
