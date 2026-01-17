// "use client";
// export default function NotFound() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
//         <p className="text-xl text-gray-700 mb-4">
//           Page Not Found
//         </p>
//         <a href={'/'} className="text-blue-600 font-medium hover:underline"
//         >
//           Go Back Home
//         </a>
//       </div>
//     </div>
//   );
// }

"use client"; // Mark as a client component

import { useEffect } from "react";

export default function NotFoundPage() {
  useEffect(() => {
    // Browser-only code
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-700">404</h1>
      <p className="text-gray-500 mt-4 text-lg">Page Not Found</p>
    </div>
  );
}
