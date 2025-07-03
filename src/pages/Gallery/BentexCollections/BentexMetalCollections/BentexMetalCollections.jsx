import React from "react";

// Static imports for Bentex Metal Collections (1–16)
import metal1 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0001.jpg";
import metal2 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0002.jpg";
import metal3 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0003.jpg";
import metal4 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0004.jpg";
import metal5 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0005.jpg";
import metal6 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0006.jpg";
import metal7 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0007.jpg";
import metal8 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0008.jpg";
import metal9 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0009.jpg";
import metal10 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0010.jpg";
import metal11 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0011.jpg";
import metal12 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0012.jpg";
import metal13 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0013.jpg";
import metal14 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0014.jpg";
import metal15 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0015.jpg";
import metal16 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/CATALOGUE-Metal-Items-&-others/CATALOGUE Metal Items & others_page-0016.jpg";

const BentexMetalCollections = () => {
  const imageList = [
    metal1, metal2, metal3, metal4,
    metal5, metal6, metal7, metal8,
    metal9, metal10, metal11, metal12,
    metal13, metal14, metal15, metal16,
  ];

  return (
    <section className="py-12 px-4 md:px-12">
      <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">
        Metal Accessories Collection
      </h2>
      <hr className="mb-6" />

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 w-max">
          {imageList.map((img, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-[300px] h-[200px] md:h-[250px] rounded-xl overflow-hidden shadow-md bg-base-100 hover:scale-105 transition-transform"
            >
              <img
                src={img}
                alt={`Bentex Metal Collection ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentexMetalCollections;
