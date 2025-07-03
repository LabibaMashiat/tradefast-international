

// Replace with actual image imports
import bandrollImage from "../../../../assets/images/Trade Fast International/Products/bandroll/bandroll.jpg";
import fusibleInterlining from "../../../../assets/images/Trade Fast International/Products/bandroll/fusible.jpg";
import waistbandSupport from "../../../../assets/images/Trade Fast International/Products/bandroll/waistband_support.webp";
import interliningRolls from "../../../../assets/images/Trade Fast International/Products/bandroll/interining_rolls.jpg";

const fabricImages = [
  { id: "interlining1", src: bandrollImage, alt: "Stretch Bandroll" },
  { id: "interlining2", src: fusibleInterlining, alt: "Fusible Interlining" },
  { id: "interlining3", src: waistbandSupport, alt: "Waistband Support" },
  { id: "interlining4", src: interliningRolls, alt: "Interlining Rolls" }
];

const FabricsBandrollInterlining = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-32 bg-base-100">
      {/* Title */}
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Stretch Fusible Bandroll & Interlining
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
        Invisible support for lasting shape. Our stretch fusible bandrolls and interlinings add structure and comfort to waistbands and tailored garment sections.
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

      {/* Feature Sections */}
      <div className="mt-8 grid gap-6">
        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Bandrolls</h3>
          <p className="text-neutral mt-2">
            Super-stretch inserts for waistbands that offer enhanced comfort and shape retention. Available in various widths and finishes for different apparel styles.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Fusible Interlining</h3>
          <p className="text-neutral mt-2">
            Features advanced adhesive technology for secure bonding between fabric layers—ensuring clean silhouettes, strength, and long-lasting wear in fashion applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FabricsBandrollInterlining;
