

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    if (email === "admin@campusstore.com" && password === "123456") {
      // Store login info in cookie
      document.cookie = "auth=true; path=/";

      // Redirect to All Products page
      router.push("/dashboard/products");
      
    } else {
      setError("Invalid email or password");
    }
  };

  // ✅ Mock login button handler
  const handleMockLogin = () => {
    // Automatically login without typing credentials
    document.cookie = "auth=true; path=/";
    router.push("/dashboard/products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-8 rounded w-96"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Staff Login</h1>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-3"
        >
          Login
        </button>

        {/* ✅ Mock Login Button */}
        <button
          type="button"
          onClick={handleMockLogin}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Mock Login (Go to All Products)
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Demo Credentials: admin@campusstore.com / 123456
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
