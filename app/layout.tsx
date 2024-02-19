import type { Metadata } from "next";
import { NavLeft } from "./components/nav-left";
import { NavUser } from "./components/nav-user";
import "./globals.css";

export const metadata: Metadata = {
  title: "首頁 - 打掃工作日誌系統",
  description: "23屆高二包容班打掃工做的日誌系統，登記分數、值日生等等⋯⋯",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={"bg-neutral-50"}>
        <main className="relative flex flex-col items-center px-8 py-4 space-y-4">
          <nav className="flex flex-row justify-between items-center w-full">
            <NavLeft />
            <h1 className="text-xl font-semibold text-slate-800 flex-grow text-center">高二包容打掃日誌</h1>
            <NavUser />
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
