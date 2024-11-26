import type { Metadata } from "next";
// import localFont from "next/font/local";
import {Montserrat} from 'next/font/google'
import "./globals.css";

const inter =Montserrat({subsets:['latin']})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Willmore Next App",
  description: "Generated by Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
      
        {children}
      </body>
    </html>
  );
}
