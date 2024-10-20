import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import { Roboto } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Bebas_Neue_init = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "400",
})

const Roboto_init = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${geistSans.variable} ${geistMono.variable} ${Bebas_Neue_init.variable} ${Roboto_init.variable} bg-[#ffea00] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
