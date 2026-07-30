import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mrugank Deshpande — Software Engineer",
  description: "Software Engineer at Principal Financial Group. Building full-stack systems and cloud-native products with React, Next.js, AWS & Salesforce.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
