// export default function DashboardLayout({ children }) {
//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-900 text-white p-6">
//         <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

//         <ul className="space-y-3">
//           <li>
//             <a href="/dashboard" className="hover:underline">
//               Overview
//             </a>
//           </li>
//           <li>
//             <a href="/dashboard/add-product" className="hover:underline">
//               Add Product
//             </a>
//           </li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8 bg-gray-100">
//         {children}
//       </main>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "auth=; path=/; max-age=0";
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col ">
        <div>
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

          <ul className="space-y-3">
            <li>
              <a href={'/'} className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/dashboard/overview" className="hover:underline">
                Overview
              </a>
            </li>

            <li>
              <a href="/dashboard/add-product" className="hover:underline">
                Add Product
              </a>
            </li>

            <li>
              <a href="/dashboard/products" className="hover:underline">
                All Products
              </a>
            </li>
          </ul>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
