import React from "react";
import Image from "next/image";

function Doctors() {
  return (
    <section className="section-spacing" aria-label="Our Specialists">
      <div className="section-container">
        <h2 className="section-heading mb-10">Our Specialists</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dr. Vitthal D. Mali */}
          <article className="card p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <Image
              src="/images/doctors/vitthalmali.webp"
              alt="Dr. Vitthal D. Mali — Senior Pediatrician at Mali Children's Hospital"
              height={200}
              width={200}
              className="rounded-2xl aspect-square w-40 h-40 md:w-48 md:h-48 object-cover flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-foreground mb-1">
                Dr. Vitthal D. Mali
              </h3>
              <span className="inline-block text-xs font-semibold text-primary bg-primary-50 px-2.5 py-0.5 rounded-full mb-3">
                MD Pediatrics, MBBS
              </span>
              <p className="text-secondary text-sm leading-relaxed">
                Dr. Vitthal D. Mali is a highly experienced pediatrician
                based in Miraj, Maharashtra, with over 25 years of experience
                in treating children. Known for his compassionate care and
                expertise in pediatric medicine, he provides exceptional
                medical services ensuring the well-being of young patients
                across the Sangli district.
              </p>
            </div>
          </article>

          {/* Dr. Swati V. Mali */}
          <article className="card p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <Image
              src="/images/doctors/swatimali.webp"
              alt="Dr. Swati V. Mali — Director of Mali Children's Hospital"
              height={200}
              width={200}
              className="rounded-2xl aspect-square w-40 h-40 md:w-48 md:h-48 object-cover flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-foreground mb-1">
                Dr. Swati V. Mali
              </h3>
              <span className="inline-block text-xs font-semibold text-primary bg-primary-50 px-2.5 py-0.5 rounded-full mb-3">
                BAMS
              </span>
              <p className="text-secondary text-sm leading-relaxed">
                Dr. Swati V. Mali serves as the Director of Mali Children&apos;s
                Hospital. With her dedication to holistic healthcare and
                administrative leadership, she ensures every patient and
                family receives the highest standard of care in a supportive
                environment.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Doctors;