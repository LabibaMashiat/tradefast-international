import React from "react";

// Static imports for Bentex Lace Catalogue 22-2
import lace22_2_1 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-CATALOG-22-2/LACE CATALOG 22 2_page-0001.jpg";
import lace22_2_2 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-CATALOG-22-2/LACE CATALOG 22 2_page-0002.jpg";
import lace22_2_3 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-CATALOG-22-2/LACE CATALOG 22 2_page-0003.jpg";
import lace22_2_4 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-CATALOG-22-2/LACE CATALOG 22 2_page-0004.jpg";
import lace22_2_5 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-CATALOG-22-2/LACE CATALOG 22 2_page-0005.jpg";
import lace22_2_6 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-CATALOG-22-2/LACE CATALOG 22 2_page-0006.jpg";
import lace22_2_7 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-CATALOG-22-2/LACE CATALOG 22 2_page-0007.jpg";
import lace22_2_8 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-CATALOG-22-2/LACE CATALOG 22 2_page-0008.jpg";
import lace22_2_9 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-CATALOG-22-2/LACE CATALOG 22 2_page-0009.jpg";
import lace22_2_10 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-CATALOG-22-2/LACE CATALOG 22 2_page-0010.jpg";
import lace22_2_11 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-CATALOG-22-2/LACE CATALOG 22 2_page-0011.jpg";
import lace22_2_12 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/LACE-CATALOG-22-2/LACE CATALOG 22 2_page-0012.jpg";


const BentexLace22Two = () => {
  const imageList = [
    lace22_2_1,
    lace22_2_2,
    lace22_2_3,
    lace22_2_4,
    lace22_2_5,
    lace22_2_6,
    lace22_2_7,
    lace22_2_8,
    lace22_2_9,
    lace22_2_10,
    lace22_2_11,
    lace22_2_12,
    
  ];

  return (
    <section className="py-12 px-4 md:px-12">
      <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">
         Lace Catalogue 22-2
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
                alt={`Bentex Lace 22-2 ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentexLace22Two;
