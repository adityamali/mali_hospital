import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dr. Mali Children's Hospital in Miraj — our mission, vision, and commitment to providing the best pediatric healthcare in Sangli District, Maharashtra since decades.",
  alternates: {
    canonical: "https://www.malihospital.com/about",
  },
  openGraph: {
    title: "About Dr. Mali Children's Hospital | Our Mission & Vision",
    description:
      "Founded by Dr. Vitthal D. Mali, our hospital is committed to compassionate pediatric care with advanced medical facilities in Sangli-Miraj-Kupwad.",
    url: "https://www.malihospital.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-[6.5rem] md:pt-[7rem]">
        <div className="relative h-44 md:h-56 w-full overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="Dr. Mali Children's Hospital building exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                About Us
              </h1>
              <nav aria-label="Breadcrumb" className="mt-2">
                <ol className="flex items-center justify-center gap-2 text-sm text-white/70">
                  <li>
                    <a href="/" className="hover:text-white transition-fast">Home</a>
                  </li>
                  <li>/</li>
                  <li className="text-white font-medium">About</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-spacing" aria-label="About the hospital">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
              Compassionate Pediatric Care Since Decades
            </h2>
            <p className="text-secondary leading-relaxed">
              Mali Children&apos;s Hospital, located in Miraj, Maharashtra, is dedicated
              to providing comprehensive pediatric care for children of all ages.
              Founded by <strong>Dr. Vitthal D. Mali</strong>, a seasoned pediatrician
              with over 25 years of experience, our hospital is equipped with advanced
              medical facilities and a compassionate team committed to the health and
              well-being of young patients. We prioritize a family-centered approach,
              ensuring that each child receives personalized treatment in a supportive
              and comfortable environment — making us a trusted choice for families
              seeking quality healthcare in the Sangli-Miraj-Kupwad region.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing bg-surface" aria-label="Mission and Vision">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <article className="card p-8">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-secondary text-sm leading-relaxed">
                To deliver exceptional, patient-centered pediatric care while fostering
                a compassionate atmosphere and continuously improving our services to
                meet the evolving healthcare needs of the community.
              </p>
            </article>
            <article className="card p-8">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-secondary text-sm leading-relaxed">
                To be the leading pediatric healthcare provider in the Sangli-Miraj-Kupwad
                region, ensuring every child achieves optimal health outcomes in a
                supportive, family-centered environment with world-class medical standards.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-spacing" aria-label="Our Values">
        <div className="section-container">
          <h2 className="section-heading mb-8 max-w-3xl mx-auto">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                title: "Family-First Approach",
                desc: "We involve families in every step of the treatment process, keeping parents informed and comfortable.",
              },
              {
                title: "Advanced Facilities",
                desc: "State-of-the-art ICU, NICU, and diagnostic equipment ensuring accurate and timely treatment.",
              },
              {
                title: "Experienced Team",
                desc: "Our pediatric specialists bring decades of combined experience in children's healthcare.",
              },
              {
                title: "24/7 Emergency Care",
                desc: "Round-the-clock emergency services so your child gets immediate attention when needed most.",
              },
              {
                title: "Affordable Care",
                desc: "Quality pediatric healthcare accessible to all families in the Sangli-Miraj region.",
              },
              {
                title: "Clean & Safe Environment",
                desc: "Hygienic, child-friendly hospital environment designed to make children feel at ease.",
              },
            ].map((value, i) => (
              <div key={i} className="card p-6">
                <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center mb-3">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2">{value.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}