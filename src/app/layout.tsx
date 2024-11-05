import type { Metadata } from "next";
// import localFont from "next/font/local";
import "@/styles/globals.css";

import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

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
  title: "Dr. Mali Children's Hospital",
  description: "The best children's hospital in Sangli District",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mali-hospital.vercel.app/",
    siteName: "Dr. Mali Children's Hospital",
    title: "Dr. Mali Children's Hospital",
    description: "The best children's hospital in Sangli District",
    images: [
      {
        url: "https://mali-hospital.vercel.app/images/mali-hospital-logo.png",
        width: 1200,
        height: 630,
        alt: "Dr. Mali Children's Hospital",
      },
    ],
  },
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body
        className="antialiased font-openSans"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
