import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import services from "@/data/services-home";
import Doctors from "@/components/home/doctors";
import HeroTest from "@/components/hero/HeroTest";
import Testimonials from "@/components/home/testimonials";
import Contact from "@/components/home/Contact";

const faqs = [
  {
    question: "What is the best pediatric hospital in Miraj?",
    answer:
      "Dr. Mali Children's Hospital is the best pediatric hospital in Miraj, providing comprehensive pediatric services including general pediatric consultation, Pediatric ICU, Neonatal ICU (NICU), vaccinations, treatment for respiratory diseases, gastroenterology, neurology, cardiology, hematology, endocrinology, ENT, dermatology, and nutritional disorders in children.",
  },
  {
    question: "What are the hospital timings at Dr. Mali Children's Hospital?",
    answer:
      "Dr. Mali Children's Hospital is open 24 hours a day, 7 days a week, including all holidays. Our emergency pediatric services and ICU are available round the clock for your child's safety.",
  },
  {
    question: "What pediatric services are available at Mali Hospital in Miraj?",
    answer:
      "We offer comprehensive pediatric services including general pediatric consultation, Pediatric ICU, Neonatal ICU (NICU), vaccinations, treatment for respiratory diseases, gastroenterology, neurology, cardiology, hematology, endocrinology, ENT, dermatology, and nutritional disorders in children.",
  },
  {
    question: "How can I book an appointment with Dr. Vitthal Mali?",
    answer:
      "You can book an appointment online through our Docon portal, call us directly at 0233-2222224, or visit the hospital in person. Online booking is available 24/7 for your convenience.",
  },
  {
    question: "Does Mali Hospital have NICU facilities for newborns?",
    answer:
      "Yes, our NICU is fully equipped with warmers, infusion pumps, hi-tech monitors, CPAP machines, and central oxygen facility. Our neonatal care team provides round-the-clock care for premature and critically ill newborns.",
  },
  {
    question: "Where is Dr. Mali Children's Hospital located?",
    answer:
      "Dr. Mali Children's Hospital is located in Miraj, Maharashtra (Sangli District). We serve families from Sangli, Miraj, Kupwad, and surrounding areas. You can find us easily on Google Maps.",
  },
  {
    question: "What age group of children does Mali Hospital treat?",
    answer:
      "We treat children of all ages, from newborns to adolescents (0–18 years). Our pediatric specialists are experienced in handling medical conditions specific to every stage of childhood development.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroTest />

      {/* Why Choose Us */}
      <section className="section-spacing" aria-label="Why Choose Us">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Why Families Trust Us
            </h2>
            <p className="text-muted text-sm">
              Equipped with advanced medical technology and specialized pediatric
              services, we ensure the highest standard of care for your child.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href="/services"
                className="card p-5 md:p-6 flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center group-hover:bg-primary transition-base">
                  <Image
                    src={service.icon}
                    width={28}
                    height={28}
                    alt=""
                    aria-hidden="true"
                    className="group-hover:brightness-0 group-hover:invert transition-base"
                  />
                </div>
                <h3 className="font-semibold text-foreground text-sm">
                  {service.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed hidden md:block">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Doctors />
      <Testimonials />

      {/* FAQ Section */}
      <section className="section-spacing" aria-label="Frequently Asked Questions">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading mb-8">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="card p-5 group cursor-pointer"
                >
                  <summary className="flex items-center justify-between font-semibold text-foreground text-sm md:text-base list-none [&::-webkit-details-marker]:hidden">
                    <span className="pr-4">{faq.question}</span>
                    <svg
                      className="w-5 h-5 text-muted flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-secondary text-sm leading-relaxed mt-3 pt-3 border-t border-border-light">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
