import type { Metadata } from "next";
import { Inter, Lato, Marcellus } from "next/font/google";
import "./globals.css";
import Header from "./_components/header/Header";
import Footer from "./_components/Footer";

const marcellus = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-marcellus" });
const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"], variable: "--font-lato" });
const fonts = [marcellus, lato];

export const metadata: Metadata = {
  title: "Noora",
  description: "AI coaching for people with ASD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.map((f) => f.className).join(" ")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
