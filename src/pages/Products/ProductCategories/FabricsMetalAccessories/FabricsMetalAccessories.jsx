import React from "react";

// Replace with actual metal accessory image paths
import buttonsImg from "../../../../assets/images/Trade Fast International/Products/Metal/buttons.jpg";
import zippersImg from "../../../../assets/images/Trade Fast International/Products/Metal/zippers.jpg";
import rivetsImg from "../../../../assets/images/Trade Fast International/Products/Metal/rivets.jpg";
import bucklesImg from "../../../../assets/images/Trade Fast International/Products/Metal/buckles.webp";
import claspsImg from "../../../../assets/images/Trade Fast International/Products/Metal/claspshooks.avif";
import eyeletsImg from "../../../../assets/images/Trade Fast International/Products/Metal/eyelets.jpg";

const fabricImages = [
  { id: "metal1", src: buttonsImg, alt: "Buttons" },
  { id: "metal2", src: zippersImg, alt: "Zippers" },
  { id: "metal3", src: rivetsImg, alt: "Rivets and Studs" },
  { id: "metal4", src: bucklesImg, alt: "Buckles" },
  { id: "metal5", src: claspsImg, alt: "Clasps and Hooks" },
  { id: "metal6", src: eyeletsImg, alt: "Eyelets and Grommets" }
];

const FabricsMetalAccessories = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-32 bg-base-100">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Metal Accessories
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
        Metal hardware that elevates design and durability. Our accessories serve both decorative and functional purposes for garments, leather goods, and footwear.
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

      {/* Highlights */}
      <div className="mt-8 grid gap-6">
        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Buttons</h3>
          <p className="text-neutral mt-2">
            Shank, sew-through, snap, and toggle types crafted from brass, stainless steel, copper, and aluminum.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Zippers</h3>
          <p className="text-neutral mt-2">
            Coil, metal, plastic, and invisible zippers with durable finishes like brass and stainless steel.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Rivets & Studs</h3>
          <p className="text-neutral mt-2">
            Strong and stylish accents made from brass, copper, or aluminum for toughness and detail.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Buckles</h3>
          <p className="text-neutral mt-2">
            From belts to straps—functional and ornamental buckles in stainless steel, iron, and other high-grade metals.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Clasps & Hooks</h3>
          <p className="text-neutral mt-2">
            Includes magnetic, hook-and-eye, and snap hooks for secure yet elegant closures.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Eyelets & Grommets</h3>
          <p className="text-neutral mt-2">
            Made with corrosion-resistant brass, copper, and aluminum for high performance and a clean finish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FabricsMetalAccessories;
