import Nav from "@/components/common/Nav";
import Footer from "@/components/sections/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <Nav />
        {children}
        <Footer />
    </main>
  );
}