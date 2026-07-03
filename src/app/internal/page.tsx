import Link from "next/link";
import Main from "@/components/ui/Main";
import Button from "@/components/ui/Button";
import Image from "next/image";
import InternalTrafficCookie from "@/components/InternalTrafficCookie";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function InternalPage() {
  return (
    <>
      <InternalTrafficCookie enabled />
      <div className="h-24"></div>
      <Main className="flex flex-col items-center justify-center min-h-screen gap-4 relative">
        <span className="text-2xl lg:text-5xl font-normal text-balance uppercase">
          Nobody here but us chickens
        </span>
        <Link href="/">
          <Button>Back to home</Button>
        </Link>
        <Image
          className="absolute bottom-0 left-1/2 translate-x-[-50%]"
          src="/assets/chicken.png"
          alt="404"
          width={500}
          height={500}
        />
      </Main>
    </>
  );
}
