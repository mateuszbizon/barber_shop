import Nav from "@/components/common/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <Nav />
        {children}
    </main>
  );
}