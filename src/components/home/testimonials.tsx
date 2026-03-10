"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

interface Testimonial {
    id: number;
    name: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Abhinandan K",
        content:
            "Best infrastructure and services, cooperative staff and Dr. Mali sir are very expert in diagnosis and treatment.",
        rating: 5,
    },
    {
        id: 2,
        name: "Siddhi Ajagaonkar",
        content:
            "Dr. Vitthal Mali, a doctor who listens to one's problem. A well spoken man. Doesn't complicate anything, listens properly, understands the problem and gives medicine that works well. Hospital is clean, staff is good and they don't keep people waiting for hours.",
        rating: 5,
    },
    {
        id: 3,
        name: "Basavarajeshwari Ambi",
        content:
            "Best hospital in town. Right from my birth I consult here. It's been 20 years. If something won't cure for a long time, I still consult Dr. Mali.",
        rating: 5,
    },
    {
        id: 4,
        name: "Kapil Beladar",
        content:
            "Good hospital for children. Nice staff, clean and tidy. Doctor is very kind and gives perfect medicine for children.",
        rating: 5,
    },
    {
        id: 5,
        name: "Deepak Phalle",
        content:
            "Children's hospital with best treatment given in the best atmosphere. Highly recommended for parents.",
        rating: 5,
    },
];

// JSON-LD for Google Reviews
const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Dr. Mali Children's Hospital",
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: testimonials.length.toString(),
        bestRating: "5",
        worstRating: "1",
    },
    review: testimonials.map((t) => ({
        "@type": "Review",
        author: { "@type": "Person", name: t.name },
        reviewBody: t.content,
        reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating.toString(),
            bestRating: "5",
        },
    })),
};

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="section-spacing bg-surface" aria-label="Patient Testimonials">
            <Script
                id="review-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
            <div className="section-container">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
                    <div>
                        <h2 className="section-heading">What Parents Say</h2>
                        <p className="text-muted text-sm mt-2 pl-5">
                            Real reviews from families who trust us with their children&apos;s health
                        </p>
                    </div>
                    <a
                        href="https://www.google.com/maps/place/Dr+Mali+children's+hospital"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-sm flex-shrink-0"
                    >
                        See All Reviews on Google
                    </a>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <article
                            key={testimonial.id}
                            className={`card p-6 flex flex-col gap-4 ${index === currentIndex % 3 ? "border-primary-100 shadow-card" : ""
                                }`}
                        >
                            <StarRating rating={testimonial.rating} />
                            <blockquote className="text-secondary text-sm leading-relaxed flex-1">
                                &ldquo;{testimonial.content}&rdquo;
                            </blockquote>
                            <div className="flex items-center gap-3 pt-2 border-t border-border-light">
                                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <cite className="text-foreground text-sm font-semibold not-italic">
                                        {testimonial.name}
                                    </cite>
                                    <div className="text-xs text-muted">Google Review</div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Extra reviews on mobile */}
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {testimonials.slice(3).map((testimonial) => (
                        <article key={testimonial.id} className="card p-6 flex flex-col gap-4">
                            <StarRating rating={testimonial.rating} />
                            <blockquote className="text-secondary text-sm leading-relaxed flex-1">
                                &ldquo;{testimonial.content}&rdquo;
                            </blockquote>
                            <div className="flex items-center gap-3 pt-2 border-t border-border-light">
                                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <cite className="text-foreground text-sm font-semibold not-italic">
                                        {testimonial.name}
                                    </cite>
                                    <div className="text-xs text-muted">Google Review</div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}