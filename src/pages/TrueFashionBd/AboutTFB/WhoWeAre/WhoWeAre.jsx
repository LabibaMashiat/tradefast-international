import { useState } from "react";
import factoryImage from "../../../../assets/images/TruefashionBD/Garments/garments_pic2.webp";

const introText = `
True Fashion BD with you always…
`;

const valuesText = `
(We values: Integrity – Commitment – Creativity – Flexibility – Transparency – Partnership.)
`;

const extendedText = `
True Fashion BD is an apparels buying house considering the updated trend and
current market demand with innovative & sustainable solutions. It’s not an old. 
It’s our very new beginning with all the expertise who are long time experience 
with sound background from varieties responsibility that combined to become a strong team.

It is a trusted apparels buying house based in Bangladesh, offering comprehensive
sourcing and supply chain solutions to the global fashion industry. We specialize in
delivering quality, style, and efficiency—ensuring our clients receive the finest
garments directly from top-tier certified factories.

From product development to final shipment, we manage every step of the process
with transparency and precision. Our manufacturing partners are handpicked for
their compliance, capability, and commitment to sustainable practices.

True Fashion BD proudly serves clients across North America, Europe, South Africa,
and Australia—adapting to fast-changing fashion trends while upholding quality,
competitive pricing, and timely delivery. We don’t just deliver garments; we deliver trust.

However, our thought is simple: to prioritize QUALITY, COMMITMENT, and PRICE.
`;

const WhoWeAre = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = () => setIsExpanded((prev) => !prev);

  return (
    <section className="py-12 bg-base-200 transition-all duration-500">
      <div
        className={`max-w-7xl mx-auto px-6 grid gap-10 items-start ${
          isExpanded ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {/* Text Section */}
        <div className={`${isExpanded ? "col-span-1" : "order-2 md:order-2"}`}>
          <div className="text-justify leading-relaxed text-base-content">
             <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">Who We Are</h2>
            <hr className="border-primary/30 mb-4" />

            {/* Intro */}
            <p className="text-lg font-semibold mb-3">{introText}</p>

            {/* Values */}
            <p className="italic text-sm text-gray-600 mb-6">{valuesText}</p>

            {/* Extended Content */}
            {isExpanded && (
              <div className="space-y-4">
                {extendedText
                  .trim()
                  .split("\n\n")
                  .map((para, idx) => (
                    <p key={idx} className="text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
              </div>
            )}

            {/* Button */}
            <div className="mt-6">
              <button
                onClick={toggleContent}
                className="btn btn-primary px-6 rounded-xl shadow-md"
                aria-expanded={isExpanded}
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`${
            isExpanded ? "md:hidden" : "order-1 md:order-1"
          } flex justify-center`}
        >
          <img
            src={factoryImage}
            alt="TRUE FASHION BD Office or Factory"
            className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
