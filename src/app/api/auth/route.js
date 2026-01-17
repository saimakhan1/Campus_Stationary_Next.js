// // import { NextResponse } from "next/server";
// // import { loginUser, logoutUser } from "@/lib/auth";

// // export async function POST(req) {
// //   const { email, password } = await req.json();

// //   const success = loginUser(email, password);

// //   if (!success) {
// //     return NextResponse.json(
// //       { message: "Invalid credentials" },
// //       { status: 401 }
// //     );
// //   }

// //   return NextResponse.json({ message: "Login successful" });
// // }

// // export async function DELETE() {
// //   logoutUser();
// //   return NextResponse.json({ message: "Logged out" });
// // }

// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// const ADMIN_EMAIL = "admin@campusstore.com";
// const ADMIN_PASSWORD = "123456";

// export async function POST(req) {
//   const { email, password } = await req.json();

//   // ✅ Trim to avoid hidden spaces
//   if (
//     email.trim() !== ADMIN_EMAIL ||
//     password.trim() !== ADMIN_PASSWORD
//   ) {
//     return NextResponse.json(
//       { message: "Invalid credentials" },
//       { status: 401 }
//     );
//   }

//   // ✅ Cookie MUST be set here
//   cookies().set("auth", "true", {
//     httpOnly: true,
//     path: "/",
//   });

//   return NextResponse.json({ message: "Login successful" });
// }

// export async function DELETE() {
//   cookies().delete("auth");
//   return NextResponse.json({ message: "Logged out" });
// }


import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    const body = await request.json();

    const email = body?.email;
    const password = body?.password;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Missing credentials" },
        { status: 400 }
      );
    }

    if (
      email.trim() !== "admin@campusstore.com" ||
      password.trim() !== "123456"
    ) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // ✅ SAFE cookie write
    const cookieStore = cookies();
    cookieStore.set("auth", "true", {
      httpOnly: true,
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("AUTH ERROR:", error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    cookies().delete("auth");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { message: "Logout failed" },
      { status: 500 }
    );
  }
}
