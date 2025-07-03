import React from "react";

// Replace with correct image paths
import baseFabric from "../../../../assets/images/Trade Fast International/Products/Pocketing/base_fabrics.webp";
import yarnDyed from "../../../../assets/images/Trade Fast International/Products/Pocketing/yarn_died.jpg";
import printedFabric from "../../../../assets/images/Trade Fast International/Products/Pocketing/printed_fabric.avif";
import innerLining from "../../../../assets/images/Trade Fast International/Products/Pocketing/lining_material.jpg";

const fabricImages = [
  { id: "support1", src: baseFabric, alt: "Base Fabric" },
  { id: "support2", src: yarnDyed, alt: "Yarn Dyed Fabric" },
  { id: "support3", src: printedFabric, alt: "Printed Fabric" },
  { id: "support4", src: innerLining, alt: "Lining Material" }
];

const FabricsPocketingLiningTrims = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-32 bg-base-100">
      {/* Title */}

       <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
         Fabrics for Pocketing, Lining & Trims
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
         Functional and durable fabrics tailored for pocketing, sleeve/knee/body linings, and trims. These engineered materials enhance the comfort, structure, and longevity of tailored garments.
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
          <h3 className="text-lg font-semibold text-primary">Base Fabrics</h3>
          <p className="text-neutral mt-2">
            Available in plain, twill, and herringbone (HB) weaves using cotton, poly-cotton blends, and 100% polyester for functional layering.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Yarn-Dyed Options</h3>
          <p className="text-neutral mt-2">
            Colorfast, patterned solutions for internal garment structure and enhanced brand aesthetics.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Printed Fabrics</h3>
          <p className="text-neutral mt-2">
            Ideal for fashion-forward internal detailing and trim customization to elevate garment identity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FabricsPocketingLiningTrims;
