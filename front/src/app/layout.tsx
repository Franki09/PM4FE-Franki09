import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/reset.css";
import "../styles/globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from "@/context/authContext";
import { CartProvider } from "@/context/cartContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L-tronics",
  description: "E-commerce M4",
  icons: {
    icon: "/logoPestaña.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <AuthProvider>
          <CartProvider>
            <ToastContainer />
            <main>{children}</main>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
