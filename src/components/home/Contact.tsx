"use client";
import React from "react";

function Contact() {
    return (
        <section className="section-spacing" aria-label="Contact and Location" id="contact-form">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="card p-6 md:p-8 flex flex-col">
                        <h2 className="section-heading mb-2">Write to Us</h2>
                        <p className="text-muted text-sm mb-6 pl-5">
                            Have a question? Send us a message and we&apos;ll respond within 24 hours.
                        </p>
                        <form
                            className="flex flex-col gap-4 flex-1"
                            action="https://formsubmit.co/drmalichildrenshospitalmiraj@gmail.com"
                            method="POST"
                        >
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1.5">
                                    Full Name
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full rounded-lg p-3 border border-border bg-surface text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-fast"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    required
                                    className="w-full rounded-lg p-3 border border-border bg-surface text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-fast"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="How can we help you?"
                                    required
                                    className="w-full rounded-lg p-3 border border-border bg-surface text-sm h-32 lg:h-40 outline-none resize-none focus:border-primary focus:ring-1 focus:ring-primary transition-fast"
                                />
                            </div>
                            <button className="btn-primary w-full" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="rounded-2xl overflow-hidden border border-border min-h-[300px] lg:min-h-0">
                        <iframe
                            className="h-full w-full min-h-[400px] lg:min-h-full"
                            src="https://www.google.com/maps/embed/v1/place?q=Dr+Mali+children's+hospital&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            title="Dr. Mali Children's Hospital location on Google Maps"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;