import Footer from "@/ui/componets/Footer";
import Header from "@/ui/componets/Header";





export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <Header/>
        {children}
         <Footer/>
        </body>
      </html>
    );
  }
 