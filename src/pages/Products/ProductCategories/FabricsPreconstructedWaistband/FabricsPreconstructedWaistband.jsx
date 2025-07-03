import React from "react";

// Replace these imports with your actual waistband image paths
import curtainWaistband from "../../../../assets/images/Trade Fast International/Products/Waistbands/curtain_wiastband.jpg";
import gripperWaistband from "../../../../assets/images/Trade Fast International/Products/Waistbands/gripper_waistband.jpg";
import stretchWaistband from "../../../../assets/images/Trade Fast International/Products/Waistbands/stretch_waistband2.jpg";
import waistbandDisplay from "../../../../assets/images/Trade Fast International/Products/Waistbands/waistband2.jpg";

const fabricImages = [
  { id: "waist1", src: curtainWaistband, alt: "Curtain Waistband" },
  { id: "waist2", src: gripperWaistband, alt: "Gripper Waistband" },
  { id: "waist3", src: stretchWaistband, alt: "Stretch Waistband" },
  { id: "waist4", src: waistbandDisplay, alt: "Waistband Display" }
];

const FabricsPreconstructedWaistband = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-32 bg-base-100">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
         Preconstructed Waistband
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
         Waistband solutions that define the fit. Our pre-constructed waistbands are engineered for durability, flexibility, and aesthetic appeal, significantly enhancing the overall garment experience.
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

      {/* Waistband Types */}
      <div className="mt-8 grid gap-6">
        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Curtain Waistbands</h3>
          <p className="text-neutral mt-2">
            Designed for classic dress pants, these waistbands provide excellent structure, support, and a refined professional finish.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Gripper Waistbands</h3>
          <p className="text-neutral mt-2">
            Ideal for shirts that stay tucked. The inner gripper keeps everything in place throughout the day without discomfort.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Stretch Waistbands</h3>
          <p className="text-neutral mt-2">
            Designed for modern comfort, these waistbands offer flexibility and mobility in wrinkle-free or casual garments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FabricsPreconstructedWaistband;
