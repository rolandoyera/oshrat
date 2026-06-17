import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/press" },
};

export default function PressLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
