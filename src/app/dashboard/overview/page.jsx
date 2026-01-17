export default function DashboardOverview() {
  return (
    <section className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Total Products */}
        <div className="bg-white shadow rounded p-6 flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-2">Total Products</h2>
          <p className="text-3xl font-bold text-blue-600">42</p>
        </div>

        {/* Card 2: Total Orders */}
        <div className="bg-white shadow rounded p-6 flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
          <p className="text-3xl font-bold text-green-600">128</p>
        </div>

        {/* Card 3: Active Users */}
        <div className="bg-white shadow rounded p-6 flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-2">Active Users</h2>
          <p className="text-3xl font-bold text-purple-600">23</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex space-x-4">
          <a
            href="/dashboard/add-product"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add New Product
          </a>
          <a
            href="/dashboard/products"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
