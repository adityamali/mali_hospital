import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className="bg-foreground text-white">
            <div className="section-container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 mb-4">
                            <Image
                                src="/images/medical-snake.png"
                                width={40}
                                height={40}
                                alt=""
                                className="h-10 w-10 brightness-0 invert"
                                aria-hidden="true"
                            />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white leading-tight">
                                    Dr. Mali
                                </span>
                                <span className="text-xs font-medium text-gray-400 leading-tight">
                                    Children&apos;s Hospital
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mt-3">
                            Providing compassionate and expert pediatric care for children of
                            all ages in the Sangli-Miraj-Kupwad region since decades.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About Us" },
                                { href: "/services", label: "Our Services" },
                                { href: "/contact", label: "Contact Us" },
                                { href: "/payments", label: "Pay Online" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-fast"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-base font-semibold mb-4 text-white">Our Services</h3>
                        <ul className="space-y-2.5">
                            {[
                                "Pediatric ICU",
                                "Neonatal ICU (NICU)",
                                "Child Vaccinations",
                                "Pediatric Consultation",
                                "24/7 Emergency Care",
                            ].map((service) => (
                                <li key={service}>
                                    <Link
                                        href="/services"
                                        className="text-gray-400 hover:text-white text-sm transition-fast"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-base font-semibold mb-4 text-white">Contact</h3>
                        <address className="not-italic space-y-3">
                            <a
                                href="tel:+912332222224"
                                className="flex items-start gap-2.5 text-gray-400 hover:text-white text-sm transition-fast"
                            >
                                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>0233-2222224</span>
                            </a>
                            <a
                                href="mailto:drmalichildrenshospitalmiraj@gmail.com"
                                className="flex items-start gap-2.5 text-gray-400 hover:text-white text-sm transition-fast"
                            >
                                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="break-all">drmalichildrenshospitalmiraj@gmail.com</span>
                            </a>
                            <a
                                href="https://maps.app.goo.gl/R9pUMdJb4qBkRSZy9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-2.5 text-gray-400 hover:text-white text-sm transition-fast"
                            >
                                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Miraj, Maharashtra 416410</span>
                            </a>
                        </address>
                        <div className="mt-5">
                            <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">Open 24/7</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="section-container py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
                    <span>&copy; {new Date().getFullYear()} Dr. Mali Children&apos;s Hospital. All Rights Reserved.</span>
                    <span>
                        Designed by{" "}
                        <a
                            href="https://www.linkedin.com/in/adityamali2003/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-light hover:text-white font-medium transition-fast"
                        >
                            Aditya Mali
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;