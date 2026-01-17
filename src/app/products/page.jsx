import { getAllProducts } from "@/lib/products";
import ProductCard from "@/components/shared/ProductCard";

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-8">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
