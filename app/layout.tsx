import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webfirst - Web development in New Zealand",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
