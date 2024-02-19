import { Metadata } from "next";

export const metadata: Metadata = {
  title: "管理 - 打掃工作日誌系統",
};

export default function ManageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
