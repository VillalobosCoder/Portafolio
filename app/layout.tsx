import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio VillalobosCoder",
  icons: {
    icon: "portafolio/loguito.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
