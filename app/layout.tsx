import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mrugank Deshpande — Software Engineer",
  description:
    "Software Engineer at Principal Financial Group, India. Building full-stack systems and cloud-native products",
  keywords: ["Mrugank Deshpande", "Software Engineer", "React", "Next.js", "AWS", "Salesforce", "Full Stack", "Pune"],
  authors: [{ name: "Mrugank Deshpande" }],
  openGraph: {
    title: "Mrugank Deshpande — Software Engineer",
    description: "Building full-stack systems and cloud-native products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
