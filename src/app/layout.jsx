

// import "./globals.css";
// import Navbar from "@/components/shared/Navbar";
// import Footer from "@/components/shared/Footer";

// export const metadata = {
//   title: "Campus Stationery Store",
//   description: "Stationery store for campus students",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

// "use client"; // needed because usePathname is a client hook
// import "./globals.css";
// import Navbar from "@/components/shared/Navbar";
// import Footer from "@/components/shared/Footer";
// import { usePathname } from "next/navigation";

// export const metadata = {
//   title: "Campus Stationery Store",
//   description: "Stationery store for campus students",
// };

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   const isDashboard = pathname?.startsWith("/dashboard"); // check if dashboard page

//   return (
//     <html lang="en">
//       <body>
//         {!isDashboard && <Navbar />}
//         <main className="min-h-screen">{children}</main>
//         {!isDashboard && <Footer />}
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ClientWrapper from "./ClientWrapper"; // we'll create this

export const metadata = {
  title: "Campus Stationery Store",
  description: "Stationery store for campus students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
