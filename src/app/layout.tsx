import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-around">
          <section>안녕하세요 캐서린님, 강의 10일째입니다!</section>
          <h3>FLUTTER 부트캠프 3기</h3>
          <section>social</section>
        </header>
        <nav className="flex flex-row list-none justify-evenly text-blue-500">
          <li>커뮤니티</li>
          <li>과제방</li>
          <li>강의실</li>
        </nav>
        {children}
      </body>
    </html>
  );
}
