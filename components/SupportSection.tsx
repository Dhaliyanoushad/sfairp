import Link from "next/link";
import Image from "next/image";

export default function SupportSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 font-sans">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Image with border and shadow */}
          <div className="lg:w-1/2 relative group">
            <div className="relative bg-white p-3 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-[1.01]">
              <Image
                src="https://i.pinimg.com/736x/84/66/57/8466576e9f04f0a5a3c451bd70fe6f8c.jpg"
                alt="Safe Workplace"
                width={800}
                height={600}
                className="w-full h-auto rounded-sm"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-[1.15] mb-8">
              How SFAIRP{" "}
              <span className="relative inline-block">
                supports your
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 25 0, 50 5 T 100 5"
                    stroke="#E30613"
                    strokeWidth="3"
                    fill="transparent"
                  />
                </svg>
              </span>
              <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                business
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 25 10, 50 5 T 100 5"
                    stroke="#E30613"
                    strokeWidth="3"
                    fill="transparent"
                  />
                </svg>
              </span>
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed mb-10">
              <p className="font-semibold text-navy">
                For a technical baseline of "As Low As Reasonably Practicable",
                you have unlimited 24/7 access to senior safety consultants for
                your most critical onsite decisions.
              </p>
              <p className="text-gray-600">
                We create tailored HSEMS, gap analyses, and statutory audits
                that ensure your systems are not just safe—they are legally
                defensible and operationally viable. From Tier 1 construction to
                major hazard facilities, our expert advisory protects your
                people and your reputation.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "Unlimited 24/7 technical advisory support",
                "Industry-specific compliance frameworks",
                "Rigorous third-party validation & verification",
                "Global safety standards integration",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 items-center font-bold text-navy"
                >
                  <div className="w-5 h-5 bg-red rounded-full flex items-center justify-center text-white text-[10px] shrink-0">
                    ✓
                  </div>
                  <span className="text-sm leading-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col xs:flex-row flex-wrap gap-4 xs:gap-5">
              <a
                href="tel:0449853255"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold text-center flex flex-col justify-center min-w-[180px] xs:min-w-[220px] transition-colors"
              >
                <span className="text-[10px] opacity-90 mb-0.5 uppercase tracking-wider">
                  Call now
                </span>
                <span className="text-base xs:text-lg leading-none">
                  +61 460 329 050
                </span>
              </a>

              <button className="border-[1.5px] border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3.5 rounded-full font-bold text-base xs:text-lg min-w-[180px] xs:min-w-[220px] transition-all flex items-center justify-center text-center">
                Find the right help
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
