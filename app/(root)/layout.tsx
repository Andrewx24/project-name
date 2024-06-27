import Footer from "@/ui/componets/Footer";



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            
            {children}
            <Footer/>
            </body>
      </html>
    );
  }
  