import type { Metadata } from "next";
import {inter} from '@/ui/fonts';
import   '@/styles/globals.css'
import Navbar from "@/ui/componets/Navbar";
import Footer from "@/ui/componets/Footer";



export const metadata: Metadata = {
  title: " Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={inter.className}>
        <Navbar />
       

     {children} 
  
      </body>
    </html>
  );
}

