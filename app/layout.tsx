"use client"
import "./globals.css";
import Navbar from "./components/navbar";
import Loader from "./components/loader";
import { useState } from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let [headingDelay, setHeadingDelay] = useState(0)
  let [loaderDelay, setLoaderDelay] = useState(1)

  return (
    <html lang="en">
      <body
        className={`antialiased bg-gray-900`}
      >
        <Loader headingDelay={headingDelay} loadingSDelay={loaderDelay}/>
        <Navbar setHeading={setHeadingDelay} setLoader={setLoaderDelay}/>
        {children}
      </body>
    </html>
  );
}
