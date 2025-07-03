import React from "react";

// Static imports for better optimization
import elastic1 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0001.jpg";
import elastic2 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0002.jpg";
import elastic3 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0003.jpg";
import elastic4 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0004.jpg";
import elastic5 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0005.jpg";
import elastic6 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0006.jpg";
import elastic7 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0007.jpg";
import elastic8 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0008.jpg";
import elastic9 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0009.jpg";
import elastic10 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0010.jpg";
import elastic11 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0011.jpg";
import elastic12 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0012.jpg";
import elastic13 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0013.jpg";
import elastic14 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0014.jpg";
import elastic15 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0015.jpg";
import elastic16 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0016.jpg";
import elastic17 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0017.jpg";
import elastic18 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0018.jpg";
import elastic19 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0019.jpg";
import elastic20 from "../../../../assets/images/Trade Fast International/Gallery/Bentex Images/btx_elastic/BTX ELASTIC_page-0020.jpg";
// Add more as needed

const BentexElastics = () => {
  const imageList = [elastic1, elastic2, elastic3, elastic4,elastic5, elastic6, elastic7, elastic8,elastic9, elastic10, elastic11, elastic12,elastic13, elastic14, elastic15, elastic16,elastic17, elastic18, elastic19, elastic20,];

  return (
    <section className="py-12 px-4 md:px-12">
      <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4"> Elastic Collection</h2>
  <hr  className="mb-6"/>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 w-max">
          {imageList.map((img, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-[300px] h-[200px] md:h-[250px] rounded-xl overflow-hidden shadow-md bg-base-100 hover:scale-105 transition-transform"
            >
              <img
                src={img}
                alt={`Bentex Elastic ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentexElastics;
