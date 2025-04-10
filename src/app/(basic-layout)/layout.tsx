import type { Metadata } from "next";
import { UserProvider } from "@/components/providers/User/UserProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Tech Posts",
  description: "概要",
};

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="ja">
      <body>
        <UserProvider>
          <div className={styles.root}>
            <Header />
            {children}
          </div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
};

export default Layout;
