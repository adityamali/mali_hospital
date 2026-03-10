"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/payments", label: "Pay Online" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Bar */}
            <div className="bg-primary text-white text-sm">
                <div className="section-container flex justify-between items-center h-10">
                    <a
                        href="tel:+912332222224"
                        className="flex items-center gap-2 hover:opacity-80 transition-fast"
                        aria-label="Call us at 0233-2222224"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>0233-2222224</span>
                    </a>
                    <a
                        href="https://maps.app.goo.gl/R9pUMdJb4qBkRSZy9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:opacity-80 transition-fast"
                        aria-label="Get directions on Google Maps"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="hidden sm:inline">Get Directions</span>
                    </a>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`bg-white transition-all duration-300 ${scrolled ? "shadow-md" : "shadow-sm"
                    }`}
                aria-label="Main navigation"
            >
                <div className="section-container flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group" aria-label="Dr. Mali Children's Hospital — Home">
                        <Image
                            src="/images/medical-snake.png"
                            width={48}
                            height={48}
                            alt=""
                            className="h-8 w-8 md:h-11 md:w-11"
                            aria-hidden="true"
                        />
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-bold text-primary leading-tight">
                                Dr. Mali
                            </span>
                            <span className="text-[0.65rem] md:text-xs font-semibold text-secondary leading-tight">
                                Children&apos;s Hospital
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm font-medium transition-base relative py-1 ${pathname === link.href
                                            ? "text-primary"
                                            : "text-secondary hover:text-primary"
                                            }`}
                                    >
                                        {link.label}
                                        {pathname === link.href && (
                                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="https://docon.co.in/patientmweb/doctors/vitthalmali"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm"
                        >
                            Book Appointment
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-surface transition-fast"
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${menuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="absolute inset-0 bg-black/20" onClick={() => setMenuOpen(false)} />
                <div
                    className={`absolute top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex justify-between items-center p-5 border-b border-border">
                        <Link href="/" onClick={() => setMenuOpen(false)}>
                            <Image src="/images/medical-snake.png" width={32} height={32} alt="" className="h-8 w-8" />
                        </Link>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="p-2 rounded-lg hover:bg-surface"
                            aria-label="Close menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="p-5" aria-label="Mobile navigation">
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`block py-3 px-4 rounded-lg text-base font-medium transition-fast ${pathname === link.href
                                            ? "bg-primary-50 text-primary"
                                            : "text-secondary hover:bg-surface hover:text-foreground"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-border">
                            <a
                                href="https://docon.co.in/patientmweb/doctors/vitthalmali"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full text-center text-sm"
                            >
                                Book Appointment
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;