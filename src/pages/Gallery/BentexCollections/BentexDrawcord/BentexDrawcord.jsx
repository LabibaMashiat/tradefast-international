import React from "react";

// Static imports for Bentex Drawcords
import drawcord1 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-drawcord/BTX drawcord_page-0001.jpg";
import drawcord2 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-drawcord/BTX drawcord_page-0002.jpg";
import drawcord3 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-drawcord/BTX drawcord_page-0003.jpg";
import drawcord4 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-drawcord/BTX drawcord_page-0004.jpg";
import drawcord5 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/BTX-drawcord/BTX drawcord_page-0005.jpg";

// Add more as needed

const BentexDrawcord = () => {
  const imageList = [
    drawcord1,
    drawcord2,
    drawcord3,
    drawcord4,
    drawcord5,
   
  ];

  return (
    <section className="py-12 px-4 md:px-12">
      <h2 className="sm:text-3xl md:text-4xl text-center font-semibold mb-4">
         Drawcord Collection
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
                alt={`Bentex Drawcord ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentexDrawcord;
