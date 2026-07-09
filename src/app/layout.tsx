import type { Metadata } from "next";

import "./globals.css";

import Navbar from "../components/navbar/Navbar";

import ThemeProvider from "./providers/ThemeProvider";

import { LanguageProvider } from "./providers/LanguageProvider";
import Footer from "../components/layout/Footer/Footer";
import { CartProvider } from './../context/CartContext';


export const metadata: Metadata = {
  title: "El Baraka Restaurant",
  description: "Order your favorite meals online",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html lang="en" suppressHydrationWarning>

      <body>


        <ThemeProvider>

          <LanguageProvider>

            <CartProvider>

            <Navbar />


            {children}

            <Footer />

            </CartProvider>
          </LanguageProvider>

        </ThemeProvider>


      </body>

    </html>

  );

}