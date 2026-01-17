// import { cookies } from "next/headers";

// const ADMIN_EMAIL = "admin@campusstore.com";
// const ADMIN_PASSWORD = "123456";

// export const loginUser = (email, password) => {
//   if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
//     cookies().set("auth", "true", {
//       httpOnly: true,
//       path: "/",
//     });
//     return true;
//   }
//   return false;
// };

// export const logoutUser = () => {
//   cookies().delete("auth");
// };

// export const isAuthenticated = () => {
//   return cookies().get("auth")?.value === "true";
// };
