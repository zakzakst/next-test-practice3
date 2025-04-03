import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "タイトル",
  description: "概要",
};

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
