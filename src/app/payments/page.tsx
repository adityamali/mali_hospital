import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pay Online",
  description:
    "Make secure online payments to Dr. Mali Children's Hospital. Pay your hospital bills 24/7 using UPI, Net Banking, or debit/credit cards.",
  alternates: {
    canonical: "https://www.malihospital.com/payments",
  },
  openGraph: {
    title: "Pay Online | Dr. Mali Children's Hospital",
    description:
      "Convenient and secure online payment options for hospital bills. UPI, Net Banking, and card payments accepted.",
    url: "https://www.malihospital.com/payments",
  },
};

export default function PaymentsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-[6.5rem] md:pt-[7rem]">
        <div className="relative h-44 md:h-56 w-full overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="Online payments at Dr. Mali Children's Hospital"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Pay Online
              </h1>
              <nav aria-label="Breadcrumb" className="mt-2">
                <ol className="flex items-center justify-center gap-2 text-sm text-white/70">
                  <li>
                    <a href="/" className="hover:text-white transition-fast">Home</a>
                  </li>
                  <li>/</li>
                  <li className="text-white font-medium">Payments</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="section-spacing" aria-label="Online Payment">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Payment Info */}
              <div>
                <h2 className="section-heading mb-6">Payment Information</h2>

                <div className="card p-6 mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Why Pay Online?</h3>
                  <ul className="space-y-2.5">
                    {[
                      "Make payment 24/7 online — anytime, anywhere, any day",
                      "All major debit and credit cards accepted",
                      "Secure and encrypted payment gateway",
                      "Instant payment confirmation",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-secondary text-sm">
                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="font-semibold text-foreground mb-4">Accepted Payment Methods</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-semibold text-muted uppercase tracking-wide">UPI</span>
                      <div className="flex gap-3 mt-2">
                        <Image src="/images/upi.jpg" alt="UPI payment" height={36} width={80} className="rounded-md border border-border object-contain h-9" />
                        <Image src="/images/gpay.jpg" alt="Google Pay" height={36} width={80} className="rounded-md border border-border object-contain h-9" />
                        <Image src="/images/paytm.svg" alt="Paytm" height={36} width={80} className="rounded-md border border-border object-contain h-9 bg-white p-1" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-muted uppercase tracking-wide">Net Banking</span>
                      <p className="text-secondary text-sm mt-1">All major banks supported</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-muted uppercase tracking-wide">Cards</span>
                      <p className="text-secondary text-sm mt-1">Visa, Mastercard, RuPay accepted</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div className="card p-6 md:p-8 h-fit">
                <h3 className="font-semibold text-foreground text-lg mb-5">
                  Make a Payment
                </h3>
                <form className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="patient-name" className="block text-sm font-medium text-foreground mb-1.5">
                      Patient Name
                    </label>
                    <input
                      id="patient-name"
                      className="w-full rounded-lg p-3 border border-border bg-surface text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-fast"
                      type="text"
                      placeholder="Enter patient's full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="patient-prn" className="block text-sm font-medium text-foreground mb-1.5">
                      Patient PRN
                    </label>
                    <input
                      id="patient-prn"
                      className="w-full rounded-lg p-3 border border-border bg-surface text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-fast"
                      type="text"
                      placeholder="Enter patient registration number"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="patient-mobile" className="block text-sm font-medium text-foreground mb-1.5">
                      Mobile Number
                    </label>
                    <input
                      id="patient-mobile"
                      className="w-full rounded-lg p-3 border border-border bg-surface text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-fast"
                      type="tel"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="payment-amount" className="block text-sm font-medium text-foreground mb-1.5">
                      Amount (₹)
                    </label>
                    <input
                      id="payment-amount"
                      className="w-full rounded-lg p-3 border border-border bg-surface text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-fast"
                      type="number"
                      placeholder="Enter amount"
                      min="1"
                      required
                    />
                  </div>
                  <button className="btn-primary w-full mt-2" type="submit">
                    Proceed to Pay
                  </button>
                  <p className="text-xs text-muted text-center mt-1">
                    🔒 Your payment information is secure and encrypted
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}