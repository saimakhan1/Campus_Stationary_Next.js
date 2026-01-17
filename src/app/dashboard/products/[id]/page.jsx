// import { getProductById } from "@/lib/products";

// export default function ProductDetails({ params }) {
//   const product = getProductById(params.id);

//   if (!product) {
//     return (
//       <div className="text-center py-20">
//         <h1 className="text-3xl font-bold">Product Not Found</h1>
//       </div>
//     );
//   }

//   return (
//     <section className="py-16 max-w-4xl mx-auto px-6">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-64 object-cover rounded mb-6"
//       />
//       <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
//       <p className="text-gray-600 mb-4">{product.description}</p>
//       <p className="text-2xl font-bold text-blue-600 mb-4">৳ {product.price}</p>
//       <p className="text-gray-500">Category: {product.category}</p>
//     </section>
//   );
// }


import { getProductById } from "@/lib/products";

export default async function ProductDetails({ params }) {
  // Unwrap params using await (because in Next.js 16 App Router it's async)
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <section className="py-16 max-w-4xl mx-auto px-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-2xl font-bold text-blue-600 mb-4">৳ {product.price}</p>
      <p className="text-gray-500">Category: {product.category}</p>
    </section>
  );
}
