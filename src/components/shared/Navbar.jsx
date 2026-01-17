

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Check if user is logged in
  const isLoggedIn = document.cookie.includes("auth=true");

  const linkClass = (path) =>
    pathname === path
      ? "text-white font-semibold underline underline-offset-4"
      : "text-gray-200 hover:text-white transition";

  const handleLogout = () => {
    document.cookie = "auth=; path=/; max-age=0";
    router.push("/");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-extrabold text-white">
          Campus Stationery
        </Link>

        {/* Links */}
        <div className="space-x-6 flex items-center">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard/overview"
                className={linkClass("/dashboard")}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
