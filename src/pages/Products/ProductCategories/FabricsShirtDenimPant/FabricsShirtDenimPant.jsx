import React from "react";

// Import images manually
import cottonDenim from "../../../../assets/images/Trade Fast International/Products/Shell/cotton_denim.jpg";
import linenBlend from "../../../../assets/images/Trade Fast International/Products/Shell/linen_blend2.webp";
import polyViscose from "../../../../assets/images/Trade Fast International/Products/Shell/polyviscose.webp";
import cottonStretch from "../../../../assets/images/Trade Fast International/Products/Shell/cotton_stretch.jpg";

const fabricImages = [
  { id: "fabric1", src: cottonDenim, alt: "Cotton Denim" },
  { id: "fabric2", src: linenBlend, alt: "Linen Blend" },
  { id: "fabric3", src: polyViscose, alt: "Poly Viscose" },
  { id: "fabric4", src: cottonStretch, alt: "Cotton Stretch" }
];

const FabricsShirtDenimPant = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-32 bg-base-100">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
         Fabrics for Pants, Denims & Shirting
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
         Versatile fabrics tailored for bottoms and shirting—ideal for casual wear, workwear, or semi-formal apparel with durability, comfort, and a premium finish.
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

      {/* Fabric Highlights */}
      <div className="mt-8 grid gap-6">
        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">100% Cotton, Cotton Stretch & Blends</h3>
          <p className="text-neutral mt-2">
            Ideal for denim pants, chinos, and casual shirts. Known for breathability and comfort with great style.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">100% Linen & Linen Blends</h3>
          <p className="text-neutral mt-2">
            Lightweight options for shirting and summer wear. Blends enhance drape and durability.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Poly-Viscose & Poly-Wool Blends</h3>
          <p className="text-neutral mt-2">
            Best suited for dress pants and formal garments with elegant texture and improved crease recovery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FabricsShirtDenimPant;
