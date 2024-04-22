import type { Metadata } from "next";
import { Lato, Marcellus } from "next/font/google";
import Footer from "./_components/Footer";
import Header from "./_components/header/Header";
import "./globals.css";

const serif = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
const sans = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"], variable: "--font-sans" });
const fonts = [serif, sans];

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
      <body className={`${serif.variable} ${sans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
