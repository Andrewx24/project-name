import type { Metadata } from "next";
import {inter} from '@/ui/fonts';
import   '@/styles/globals.css'

import Header from "@/ui/componets/Header";
import Footer from "@/ui/componets/Footer";




export const metadata: Metadata = {
  title: " Next App",
  description: "Generated by create next app",
};

export default   function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={inter.className}>
     
        {children}
      
      
    </body>
  </html>
);

  
}

