import React from "react";

// Static imports for Bentex Metal Buttons
import metalbutton1 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Metal Button Collection/METAL BUTTON COLLECTIONS BENTEX_page-0001.jpg";
import metalbutton2 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Metal Button Collection/METAL BUTTON COLLECTIONS BENTEX_page-0002.jpg";
import metalbutton3 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Metal Button Collection/METAL BUTTON COLLECTIONS BENTEX_page-0003.jpg";
import metalbutton4 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Metal Button Collection/METAL BUTTON COLLECTIONS BENTEX_page-0004.jpg";
import metalbutton5 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Metal Button Collection/METAL BUTTON COLLECTIONS BENTEX_page-0005.jpg";
import metalbutton6 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Metal Button Collection/METAL BUTTON COLLECTIONS BENTEX_page-0006.jpg";
import metalbutton7 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Metal Button Collection/METAL BUTTON COLLECTIONS BENTEX_page-0007.jpg";
import metalbutton8 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Metal Button Collection/METAL BUTTON COLLECTIONS BENTEX_page-0008.jpg";
import metalbutton9 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/Metal Button Collection/METAL BUTTON COLLECTIONS BENTEX_page-0009.jpg";

// Add more as needed

const BentexMetalButtons = () => {
  const imageList = [
    metalbutton1,
    metalbutton2,
    metalbutton3,
    metalbutton4,
    metalbutton5,
    metalbutton6,
    metalbutton7,
    metalbutton8,
    metalbutton9,
  ];

  return (
    <section className="py-12 px-4 md:px-12">
      <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">
         Metal Button Collection
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
                alt={`Bentex Metal Button ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentexMetalButtons;
