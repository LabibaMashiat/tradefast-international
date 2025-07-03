import React from "react";

// Static imports for Bentex Zippers
import zipper1 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-ZIPPER/BTX ZIPPER_page-0001.jpg";
import zipper2 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-ZIPPER/BTX ZIPPER_page-0002.jpg";
import zipper3 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-ZIPPER/BTX ZIPPER_page-0003.jpg";
import zipper4 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-ZIPPER/BTX ZIPPER_page-0004.jpg";
import zipper5 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-ZIPPER/BTX ZIPPER_page-0005.jpg";
import zipper6 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-ZIPPER/BTX ZIPPER_page-0006.jpg";
import zipper7 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-ZIPPER/BTX ZIPPER_page-0007.jpg";
import zipper8 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-ZIPPER/BTX ZIPPER_page-0008.jpg";
// Add more as needed

const BentexZipper = () => {
  const imageList = [zipper1, zipper2, zipper3, zipper4, zipper5,
    zipper6, zipper7, zipper8
  ];

  return (
    <section className="py-12 px-4 md:px-12">
      <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">
         Zipper Collection
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
                alt={`Bentex Zipper ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentexZipper;
