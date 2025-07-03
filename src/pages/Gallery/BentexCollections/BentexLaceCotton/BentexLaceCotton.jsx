import React from "react";

// Static imports for Bentex Lace Cotton Catalogue-22
import lacecotton1 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-COTTON-CATALOG-22/LACE COTTON CATALOG 22_page-0001.jpg";
import lacecotton2 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-COTTON-CATALOG-22/LACE COTTON CATALOG 22_page-0002.jpg";
import lacecotton3 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-COTTON-CATALOG-22/LACE COTTON CATALOG 22_page-0003.jpg";
import lacecotton4 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-COTTON-CATALOG-22/LACE COTTON CATALOG 22_page-0004.jpg";
import lacecotton5 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-COTTON-CATALOG-22/LACE COTTON CATALOG 22_page-0005.jpg";
// Add more as needed

const BentexLaceCotton = () => {
  const imageList = [
    lacecotton1,
    lacecotton2,
    lacecotton3,
    lacecotton4,
    lacecotton5,
  ];

  return (
    <section className="py-12 px-4 md:px-12">
      <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">
         Lace Cotton Catalogue-22
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
                alt={`Lace Cotton ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentexLaceCotton;
