import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salon Fryzjerski",
  description: "Profesjonalne strzyżenie, koloryzacja i stylizacja dla kobiet i mężczyzn. Odwiedź nasz salon i odkryj, jak dobrze możesz wyglądać — i czuć się — każdego dnia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
