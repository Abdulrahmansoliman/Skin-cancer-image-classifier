import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { Github } from "../shared/icons";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />
      <div className="fixed h-screen w-full animate-background bg-gradient-to-r from-teal-500 via-purple-500 to-teal-500" />
      <div
        className={`fixed top-0 w-full bg-gray-800 ${
          scrolled
            ? "backdrop-blur-xl"
            : ""
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl gap-3">
            <Image
              src="/logo.svg"
              alt="Logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p className="text-white">Skin Guard</p>
          </Link>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Abdulrahmansoliman/Skin-cancer-image-classifier"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
        {children}
      </main>
      <div className="absolute w-full  bg-gray-800 py-5 text-center">
        <p className="text-white">
          Created with ❤️ by {" "}
          <a
            className="font-semibold text-teal-500 transition-colors hover:text-purple-500"
            href="https://github.com/helmy162"
            target="_blank"
            rel="noopener noreferrer"
          >
            helmy162
          </a>
          .
        </p>
      </div>
    </>
  );
}
