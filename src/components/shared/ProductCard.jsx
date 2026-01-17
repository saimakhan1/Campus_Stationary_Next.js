import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <p className="font-bold text-blue-600 mb-2">৳ {product.price}</p>
      <Link
        href={`/products/${product.id}`}
        className="mt-auto text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
