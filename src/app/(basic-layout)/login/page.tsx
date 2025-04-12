import type { Metadata } from "next";
import { Login } from "@/components/templates/Login";

export const metadata: Metadata = {
  title: "ログイン | Tech Posts",
};

const Page = () => {
  return <Login />;
};

export default Page;
