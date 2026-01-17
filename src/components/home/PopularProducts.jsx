import Link from "next/link";
import { getAllProducts } from "@/lib/products";
import ProductCard from "../shared/ProductCard";

const PopularProducts = () => {
  const products = getAllProducts().slice(0, 8); // first 8 products

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">Popular Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/products"
            className="inline-block text-blue-600 font-medium hover:underline"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
