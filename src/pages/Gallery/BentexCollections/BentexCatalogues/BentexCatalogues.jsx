import React from "react";

// Static imports for Bentex Catalogues Collections
import catalogue1 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0001.jpg";
import catalogue2 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0002.jpg";
import catalogue3 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0003.jpg";
import catalogue4 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0004.jpg";
import catalogue5 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0005.jpg";
import catalogue6 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0006.jpg";
import catalogue7 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0007.jpg";
import catalogue8 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0008.jpg";
import catalogue9 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0009.jpg";
import catalogue10 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0010.jpg";
import catalogue11 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0011.jpg";
import catalogue12 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0012.jpg";
import catalogue13 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0013.jpg";
import catalogue14 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0014.jpg";
import catalogue15 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0015.jpg";
import catalogue16 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0016.jpg";
import catalogue17 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Catalog-BTX/Catalog BTX_page-0017.jpg";

const BentexCatalogues = () => {
  const imageList = [
    catalogue1,
    catalogue2,
    catalogue3,
    catalogue4,
    catalogue5,
    catalogue6,
    catalogue7,
    catalogue8,
    catalogue9,
    catalogue10,
    catalogue11,
    catalogue12,
    catalogue13,
    catalogue14,
    catalogue15,
    catalogue16,
    catalogue17,
  ];

  return (
    <section className="py-12 px-4 md:px-12">
      <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">
         Catalogue Collection
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
                alt={`Bentex Catalogue ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentexCatalogues;
