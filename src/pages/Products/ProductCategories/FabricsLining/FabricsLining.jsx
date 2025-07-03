import React from "react";

// Replace these with actual image imports
import solidLining from "../../../../assets/images/Trade Fast International/Products/Lining/solid_lining.jpg";
import printedLining from "../../../../assets/images/Trade Fast International/Products/Lining/printed_lining.jpg";
import jacquardLining from "../../../../assets/images/Trade Fast International/Products/Lining/jacquard_lining.jpg";
import rayonLining from "../../../../assets/images/Trade Fast International/Products/Lining/rayon_lining.jpg";

const fabricImages = [
  { id: "lining1", src: solidLining, alt: "Solid Lining Fabric" },
  { id: "lining2", src: printedLining, alt: "Printed Lining" },
  { id: "lining3", src: jacquardLining, alt: "Jacquard Lining" },
  { id: "lining4", src: rayonLining, alt: "Rayon Poly Blend" }
];

const FabricsLining = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-32 bg-base-100">
      {/* Title */}
      
       
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
           Lining Fabrics
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
        Inner layers that add luxury. Our high-quality lining fabrics enhance the internal finish of garments—offering comfort, structure, and a premium touch.
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

      {/* Details */}
      <div className="mt-8 grid gap-6">
        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Materials</h3>
          <p className="text-neutral mt-2">
            100% Polyester (Taffeta, Pongee, Twill), Rayon, and Poly-Rayon blends designed for breathability, drape, and durability.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Finishes Available</h3>
          <ul className="list-disc list-inside text-neutral mt-2 space-y-1">
            <li>Solid</li>
            <li>Printed</li>
            <li>Jacquard</li>
            <li>Dobby</li>
            <li>Yarn-Dyed</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FabricsLining;
