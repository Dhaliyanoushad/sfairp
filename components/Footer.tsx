import Link from "next/link";
import ScrollLink from "./ScrollLink";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 font-sans">
      <div className="max-w-[1600px] mx-auto px-8 grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 lg:gap-16 mb-20">
        <div className="flex flex-col">
          <ScrollLink href="/" className="flex flex-col mb-8 leading-none">
            <span className="text-red font-black text-2xl tracking-tighter">
              SFAIRP
            </span>
            <span className="text-white font-bold text-[10px] tracking-[0.2em] uppercase">
              Safety Partners
            </span>
          </ScrollLink>
          <p className="text-sm text-slate-400 leading-relaxed font-medium mb-8">
            Technical HSE advisory and onsite safety critical operations
            management for high-risk industrial environments across Australia.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li>
              <ScrollLink href="/" className="hover:text-red transition-colors">
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                href="/about"
                className="hover:text-red transition-colors"
              >
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                href="/services"
                className="hover:text-red transition-colors"
              >
                Technical Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                href="/high-risk-expertise"
                className="hover:text-red transition-colors"
              >
                High-Risk Expertise
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                href="/contact"
                className="hover:text-red transition-colors"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">
            Expertise
          </h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li>
              <ScrollLink
                href="/high-risk-expertise"
                className="hover:text-red transition-colors"
              >
                Systems & Compliance
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                href="/high-risk-expertise"
                className="hover:text-red transition-colors"
              >
                Major Hazard Facilities
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                href="/high-risk-expertise"
                className="hover:text-red transition-colors"
              >
                Logistics Safety
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                href="/high-risk-expertise"
                className="hover:text-red transition-colors"
              >
                Permit Systems
              </ScrollLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">
            Contact Us
          </h4>
          <p className="text-sm font-bold text-slate-400 mb-2">
            Technical Helpline
          </p>
          <a
            href="tel:0449853255"
            className="text-2xl md:text-xl lg:text-2xl font-black text-red mb-6 transition-transform hover:scale-105 cursor-pointer w-fit underline decoration-2 underline-offset-8 block"
          >
            +61 460 329 050
          </a>
          <ScrollLink
            href="/contact"
            className="bg-red text-white px-8 md:px-6 lg:px-8 py-4 md:py-3 lg:py-4 rounded-full font-bold text-sm md:text-xs lg:text-sm hover:bg-white hover:text-slate-900 transition-all text-center block md:inline-block lg:block shadow-lg shadow-red/10"
          >
            Book a Consultation
          </ScrollLink>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
        <p>
          &copy; {new Date().getFullYear()} SFAIRP SAFETY PARTNERS. National
          Technical Advisory.
        </p>
      </div>
    </footer>
  );
}
