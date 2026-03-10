import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Facilities",
  description:
    "Explore our pediatric services: ICU, NICU, vaccinations, respiratory care, gastroenterology, neurology, cardiology, and more. Advanced facilities at Dr. Mali Children's Hospital, Miraj.",
  alternates: {
    canonical: "https://www.malihospital.com/services",
  },
  openGraph: {
    title: "Pediatric Services & Facilities | Dr. Mali Children's Hospital",
    description:
      "Comprehensive pediatric care including ICU, NICU, vaccinations, and specialist treatments for children in Sangli-Miraj-Kupwad region.",
    url: "https://www.malihospital.com/services",
  },
};

interface ServiceItem {
  image: string;
  title: string;
  description: string;
  alt: string;
}

const facilities: ServiceItem[] = [
  {
    image: "/images/icu.webp",
    title: "Pediatric ICU",
    description:
      "Ultramodern Intensive Care Unit equipped with hi-tech monitors, ventilators, and advanced life-support equipment for critical pediatric care.",
    alt: "Pediatric ICU facility at Dr. Mali Children's Hospital",
  },
  {
    image: "/images/icu.webp",
    title: "Neonatal ICU (NICU)",
    description:
      "Fully equipped NICU with warmers, infusion pumps, monitors, CPAP machines, and central oxygen facility for newborn and premature infant care.",
    alt: "Neonatal ICU at Dr. Mali Children's Hospital in Miraj",
  },
  {
    image: "/images/services/vaccine.webp",
    title: "Pediatric Vaccinations",
    description:
      "Complete vaccination programs following the IAP immunization schedule — from birth to adolescence, ensuring your child stays protected.",
    alt: "Child vaccination service at Mali Hospital Miraj",
  },
];

const specializations: ServiceItem[] = [
  {
    image: "/images/services/chest.webp",
    title: "Pediatric Chest & Respiratory Care",
    description:
      "Diagnosis and treatment of asthma, pneumonia, bronchitis, and other respiratory conditions in children using advanced diagnostic methods.",
    alt: "Pediatric respiratory disease diagnosis and treatment",
  },
  {
    image: "/images/services/liver.webp",
    title: "Pediatric Gastroenterology",
    description:
      "Expert care for liver, digestive, and gastrointestinal disorders in children including chronic diarrhea, hepatitis, and nutritional issues.",
    alt: "Pediatric gastroenterology services for children",
  },
  {
    image: "/images/services/brain.webp",
    title: "Pediatric Neurology & Epilepsy",
    description:
      "Comprehensive diagnosis and treatment of epilepsy, seizure disorders, developmental delays, and neurological conditions in children.",
    alt: "Pediatric neurology and epilepsy treatment",
  },
  {
    image: "/images/services/heart.webp",
    title: "Pediatric Cardiology",
    description:
      "Screening and management of congenital heart diseases, cardiac disorders, and blood-related conditions in children.",
    alt: "Pediatric cardiology and heart care for children",
  },
  {
    image: "/images/services/blood.webp",
    title: "Pediatric Hematology",
    description:
      "Diagnosis and treatment of anemia, blood disorders, clotting problems, and related hematological conditions in children.",
    alt: "Pediatric hematology blood disorder treatment",
  },
  {
    image: "/images/services/gland.webp",
    title: "Pediatric Endocrinology",
    description:
      "Management of hormonal and growth disorders, diabetes, thyroid conditions, and metabolic diseases in children.",
    alt: "Pediatric endocrinology hormonal disorder treatment",
  },
  {
    image: "/images/services/food.webp",
    title: "Pediatric Nutrition",
    description:
      "Assessment and management of childhood malnutrition, obesity, feeding disorders, and dietary counseling for optimal growth.",
    alt: "Pediatric nutrition and dietary care",
  },
  {
    image: "/images/services/ent.webp",
    title: "Pediatric ENT Care",
    description:
      "Treatment for ear infections, tonsillitis, adenoids, hearing issues, and other ENT conditions common in children.",
    alt: "Pediatric ENT specialist care for children",
  },
  {
    image: "/images/services/skin.webp",
    title: "Pediatric Dermatology",
    description:
      "Diagnosis and treatment of eczema, allergic rashes, infections, and other skin conditions affecting infants and children.",
    alt: "Pediatric skin disease treatment and dermatology",
  },
];

function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <article className="card overflow-hidden group">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={item.image}
          width={400}
          height={250}
          alt={item.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
        <p className="text-muted text-sm leading-relaxed">{item.description}</p>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-[6.5rem] md:pt-[7rem]">
        <div className="relative h-44 md:h-56 w-full overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="Pediatric services and facilities at Dr. Mali Children's Hospital"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Services & Facilities
              </h1>
              <nav aria-label="Breadcrumb" className="mt-2">
                <ol className="flex items-center justify-center gap-2 text-sm text-white/70">
                  <li>
                    <a href="/" className="hover:text-white transition-fast">Home</a>
                  </li>
                  <li>/</li>
                  <li className="text-white font-medium">Services</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-spacing" aria-label="Hospital Facilities">
        <div className="section-container">
          <h2 className="section-heading mb-8">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((item, i) => (
              <ServiceCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section-spacing bg-surface" aria-label="Medical Specializations">
        <div className="section-container">
          <h2 className="section-heading mb-3">Pediatric Specializations</h2>
          <p className="text-muted text-sm mb-8 pl-5">
            Comprehensive diagnosis and treatment across all major pediatric specialties
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((item, i) => (
              <ServiceCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing" aria-label="Book an appointment">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Need Pediatric Care for Your Child?
          </h2>
          <p className="text-muted text-sm mb-6 max-w-lg mx-auto">
            Our experienced team is ready to provide the best treatment. Book an appointment or walk in for a consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://docon.co.in/patientmweb/doctors/vitthalmali"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Appointment
            </a>
            <a href="tel:+912332222224" className="btn-outline">
              Call: 0233-2222224
            </a>
          </div>
        </div>
      </section>
    </>
  );
}