import { useState } from "react";
import factoryImage from "../../../../assets/images/TruefashionBD/Garments/garments_pic2.webp";

// Text Constants
const introText = `
TRUE FASHION BD is a trusted garments buying house based in Bangladesh, offering comprehensive sourcing and supply chain solutions to the global fashion industry. We specialize in delivering quality, style, and efficiency—ensuring our clients receive the finest garments directly from top-tier certified factories.
`;

const extendedText = `
From product development to final shipment, we manage every step of the process with transparency and precision. Our manufacturing partners are handpicked for their compliance, capability, and commitment to sustainable practices.

TRUE FASHION BD proudly serves clients across North America, Europe, South Africa, and Australia—adapting to fast-changing fashion trends while upholding quality, competitive pricing, and timely delivery. We don’t just deliver garments; we deliver trust.
`;

const WhoWeAre = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = () => setIsExpanded((prev) => !prev);

  return (
    <section className="py-12 bg-base-200 transition-all duration-500">
      <div
        className={`max-w-7xl mx-auto px-6 grid gap-8 items-start ${
          isExpanded ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {/* Text Section */}
        <div className={`${isExpanded ? "col-span-1" : "order-2 md:order-2"}`}>
          <div className="text-justify leading-relaxed break-words whitespace-pre-line text-base-content">
            <h2 className="sm:text-3xl md:text-4xl font-semibold mb-4">Who We Are</h2>
            <hr />
            <p className="mt-4">{introText}</p>

            {isExpanded && <div className="mt-6">{extendedText}</div>}

            <button
              onClick={toggleContent}
              className="btn btn-primary mt-6"
              aria-expanded={isExpanded}
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
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
