import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dr. Mali Children's Hospital in Miraj. Call 0233-2222224, email us, or visit our hospital. We're available 24/7 for pediatric emergencies.",
  alternates: {
    canonical: "https://www.malihospital.com/contact",
  },
  openGraph: {
    title: "Contact Dr. Mali Children's Hospital | Miraj, Sangli",
    description:
      "Reach us by phone, email, or visit. Our team is ready to help with all your pediatric healthcare needs.",
    url: "https://www.malihospital.com/contact",
  },
};

const contactCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Call Us",
    subtitle: "Speak to Our Team",
    detail: "0233-2222224",
    href: "tel:+912332222224",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Visit Us",
    subtitle: "Walk in anytime, 24/7",
    detail: "View on Google Maps",
    href: "https://maps.app.goo.gl/R9pUMdJb4qBkRSZy9",
    external: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email Us",
    subtitle: "We'll respond within 24 hours",
    detail: "drmalichildrenshospitalmiraj@gmail.com",
    href: "mailto:drmalichildrenshospitalmiraj@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-[6.5rem] md:pt-[7rem]">
        <div className="relative h-44 md:h-56 w-full overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="Contact Dr. Mali Children's Hospital"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Contact Us
              </h1>
              <nav aria-label="Breadcrumb" className="mt-2">
                <ol className="flex items-center justify-center gap-2 text-sm text-white/70">
                  <li>
                    <a href="/" className="hover:text-white transition-fast">Home</a>
                  </li>
                  <li>/</li>
                  <li className="text-white font-medium">Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-spacing" aria-label="Contact Information">
        <div className="section-container">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Get In Touch
            </h2>
            <p className="text-muted text-sm">
              We&apos;d love to hear from you. Whether you have questions, need support,
              or want to learn more about our services, our team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {contactCards.map((card, i) => (
              <a
                key={i}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="card p-6 flex flex-col gap-4 hover:border-primary-100 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-base">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-0.5">{card.title}</h3>
                  <p className="text-muted text-sm">{card.subtitle}</p>
                </div>
                <span className="text-primary text-sm font-medium mt-auto">
                  {card.detail}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}