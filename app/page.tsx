import type { Metadata } from "next";
import { Button } from "antd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Project Management Dashboard",
};

export default function Home() {
  return (
    <main className="main flex justify-center items-center h-screen">
      <Link href="/login">
        <Button className="font-bold" size="large">
          Login to Dashboard
        </Button>
      </Link>
    </main>
  );
}
