import "./globals.css";
import { Josefin_Sans, Source_Serif_Pro } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";

const sourceSerifPro = Source_Serif_Pro({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-source-serif-pro",
});
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

export const metadata = {
  title: "My Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${sourceSerifPro.variable} ${josefinSans.variable}`}
    >
      <body className="bg-uBgColor">
        <Header />
        <main className="max-w-[1240px] m-auto flex">
          <section className="w-[70%]">{children}</section>
          <SideBar />
        </main>
        <Footer />
      </body>
    </html>
  );
}
