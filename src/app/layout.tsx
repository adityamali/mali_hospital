import type { Metadata } from "next";
// import localFont from "next/font/local";
import "@/styles/globals.css";

import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";


export const metadata: Metadata = {
  title: "Dr. Mali Children's Hospital | Best Pediatric Hospital in Miraj",
  description: "Providing top-quality healthcare for children in Sangli District. Our experienced pediatric specialists ensure the best treatment and care for your child.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.malihospital.com/",
    siteName: "Dr. Mali Children's Hospital",
    title: "Dr. Mali Children's Hospital | Best Pediatric Hospital in Miraj",
    description: "Explore Dr. Mali Children's Hospital for advanced pediatric treatments, neonatal care, and family-friendly facilities in Sangli District.",
    images: [
      {
        url: "https://malihospital.com/assets/meta/Logo.png",
        width: 1200,
        height: 630,
        alt: "Logo of Dr. Mali Children's Hospital",
      },
      {
        url: "https://malihospital.com/assets/meta/Exterior.png",
        width: 1200,
        height: 630,
        alt: "Exterior view of Dr. Mali Children's Hospital in Sangli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mali_hospital",
    title: "Dr. Mali Children's Hospital | Pediatric Care in Sangli District",
    description: "Top-rated children's hospital in Sangli District, offering comprehensive pediatric healthcare with a family-centered approach.",
    images: ["https://malihospital.com/assets/meta/Logo.png"],
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
