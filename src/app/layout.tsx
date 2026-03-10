import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.malihospital.com"),
  title: {
    default:
      "Dr. Mali Children's Hospital | Best Pediatric Hospital in Miraj, Sangli",
    template: "%s | Dr. Mali Children's Hospital",
  },
  description:
    "Dr. Mali Children's Hospital in Miraj provides expert pediatric care including NICU, ICU, vaccinations, and 24/7 emergency services. Trusted by families across Sangli District, Maharashtra.",
  keywords: [
    "children's hospital miraj",
    "pediatric hospital sangli",
    "best child specialist miraj",
    "NICU miraj",
    "neonatal care sangli",
    "ICU for children miraj",
    "pediatric vaccinations sangli",
    "emergency pediatric care miraj",
    "Dr Mali hospital",
    "Mali children's hospital",
    "pediatrician miraj maharashtra",
    "child doctor sangli district",
    "24/7 pediatric care miraj",
    "children's hospital maharashtra",
    "newborn care miraj",
    "child healthcare sangli miraj kupwad",
  ],
  icons: {
    icon: "/assets/meta/favicon.ico",
    shortcut: "/assets/meta/favicon.ico",
  },
  alternates: {
    canonical: "https://www.malihospital.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.malihospital.com/",
    siteName: "Dr. Mali Children's Hospital",
    title:
      "Dr. Mali Children's Hospital | Expert Pediatric Care in Miraj, Sangli",
    description:
      "Advanced pediatric treatments, NICU, ICU, child vaccinations, and family-friendly facilities. Serving Sangli-Miraj-Kupwad region with compassionate care.",
    images: [
      {
        url: "/assets/meta/Logo.png",
        width: 1200,
        height: 630,
        alt: "Dr. Mali Children's Hospital — Trusted Pediatric Care in Miraj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dr. Mali Children's Hospital | Pediatric Care in Sangli District",
    description:
      "Top-rated children's hospital in Sangli District offering comprehensive pediatric healthcare with a family-centered approach.",
    images: ["/assets/meta/Logo.png"],
  },
};

// JSON-LD Structured Data for MedicalBusiness
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://www.malihospital.com/#organization",
  name: "Dr. Mali Children's Hospital",
  alternateName: "Mali Children's Hospital Miraj",
  url: "https://www.malihospital.com",
  logo: "https://www.malihospital.com/assets/meta/Logo.png",
  image: "https://www.malihospital.com/images/hero.webp",
  description:
    "Dr. Mali Children's Hospital is a leading pediatric hospital in Miraj, Maharashtra, providing expert care for children including NICU, ICU, vaccinations, and 24/7 emergency pediatric services.",
  telephone: "+91-233-2222224",
  email: "drmalichildrenshospitalmiraj@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Miraj",
    addressLocality: "Miraj",
    addressRegion: "Maharashtra",
    postalCode: "416410",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "16.8241",
    longitude: "74.6463",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  medicalSpecialty: [
    "Pediatrics",
    "Neonatology",
    "Pediatric Pulmonology",
    "Pediatric Gastroenterology",
    "Pediatric Neurology",
    "Pediatric Cardiology",
    "Pediatric Hematology",
    "Pediatric Endocrinology",
    "Pediatric Dermatology",
    "Pediatric ENT",
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "Pediatric ICU" },
    { "@type": "MedicalProcedure", name: "Neonatal ICU (NICU)" },
    { "@type": "MedicalProcedure", name: "Pediatric Vaccinations" },
    { "@type": "MedicalProcedure", name: "Pediatric Consultation" },
    { "@type": "MedicalProcedure", name: "24/7 Emergency Pediatric Care" },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "200",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      {GA_TRACKING_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
      <body className="antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
