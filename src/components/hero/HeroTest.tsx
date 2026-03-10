import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative pt-[6.5rem] md:pt-[7rem]" aria-label="Welcome to Dr. Mali Children's Hospital">
      <div className="section-container">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-[50vh] md:h-[75vh] w-full">
            <Image
              src="/images/hero.webp"
              alt="Dr. Mali Children's Hospital — Modern pediatric care facility in Miraj, Maharashtra"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="section-container">
                <div className="max-w-xl animate-fade-in-up">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
                    Trusted Pediatric Care
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-4">
                    Your Child Deserves the{" "}
                    <span className="text-primary-100">Best Care</span>
                  </h1>
                  <p className="text-white/80 text-sm md:text-base max-w-md mb-6 leading-relaxed">
                    Expert pediatric specialists, advanced NICU &amp; ICU facilities,
                    and compassionate care for children of all ages in Miraj.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://docon.co.in/patientmweb/doctors/vitthalmali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent"
                    >
                      Book Appointment
                    </a>
                    <a
                      href="tel:+912332222224"
                      className="btn-outline border-white text-white bg-slate-400 hover:bg-white hover:text-foreground"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar  */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { number: "25+", label: "Years Experience" },
            { number: "24/7", label: "Emergency Care" },
            { number: "10,000+", label: "Children Treated" },
            { number: "4.8 ★", label: "Google Rating" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-surface rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-border-light hover:border-primary-100 transition-base"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
              <div className="text-xs md:text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;