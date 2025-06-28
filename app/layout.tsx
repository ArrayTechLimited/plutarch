import type React from "react";
import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const afacad = Afacad({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plutarch Construction",
  description: "From Blueprint to Reality, We deliver with Excellent Precision",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={afacad.className}>
        <Layout children={children} />
      </body>
    </html>
  );
}
