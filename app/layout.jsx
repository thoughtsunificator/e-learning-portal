"use client";

import WhatsApp from "@/components/Contact/WhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { usePathname } from "next/navigation";
import styles from "./layout.module.scss";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={"dark:bg-black " + styles.noscrollbar}>
        <Providers>
          {(!pathname.includes(portalPage)) && (<Header />)}
          {children}
          <Footer />
          {/* <ScrollToTop /> */}
          {(!pathname.includes(portalPage)) && (<WhatsApp />)}
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";import { portalPage } from "@/src/shared/Constants";

