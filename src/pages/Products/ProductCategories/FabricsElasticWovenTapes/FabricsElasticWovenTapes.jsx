import React from "react";

// Replace these imports with your actual images
import elasticWaist from "../../../../assets/images/Trade Fast International/Products/Elastic/elastic_waist.jpg";
import wovenTape from "../../../../assets/images/Trade Fast International/Products/Elastic/woven_tape.jpg";
import stretchBand from "../../../../assets/images/Trade Fast International/Products/Elastic/stretch_band.jpg";
import athleticElastic from "../../../../assets/images/Trade Fast International/Products/Elastic/athletic_elastic.jpg";

const fabricImages = [
  { id: "elastic1", src: elasticWaist, alt: "Elastic Waist" },
  { id: "elastic2", src: wovenTape, alt: "Woven Tape" },
  { id: "elastic3", src: stretchBand, alt: "Stretch Band" },
  { id: "elastic4", src: athleticElastic, alt: "Athletic Elastic" }
];

const FabricsElasticWovenTapes = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-32 bg-base-100">
      {/* Title */}
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Elastic and Woven Tapes
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
        Comfort meets functionality. Our elastics are high-performance narrow fabrics designed for garment categories where flexibility and endurance are essential.
        </p>

      {/* Scrollable Image Gallery */}
      <div className="overflow-x-auto flex gap-4 pb-4 scrollbar-hide">
        {fabricImages.map((img) => (
          <div
            key={img.id}
            id={img.id}
            className="min-w-[250px] h-64 rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Application and Features */}
      <div className="mt-8 grid gap-6">
        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Applications</h3>
          <p className="text-neutral mt-2">
            Used in chinos, dress pants, swimwear, athletic shorts, and wrinkle-free garments—either integrated into waistbands or as standalone elements.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Features</h3>
          <ul className="list-disc list-inside text-neutral mt-2 space-y-1">
            <li>Exceptional stretch recovery</li>
            <li>Soft, skin-friendly feel</li>
            <li>Consistent quality for a secure, long-lasting fit</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FabricsElasticWovenTapes;
