// Replace with real image paths
import silkFabric from "../../../../assets/images/Trade Fast International/Products/Silk/silk1.jpg";
import colorfulScarf from "../../../../assets/images/Trade Fast International/Products/Silk/silk2.jpg";
import silkPainting from "../../../../assets/images/Trade Fast International/Products/Silk/silk3.jpg";
import silkTexture from "../../../../assets/images/Trade Fast International/Products/Silk/silk4.jpg";

const fabricImages = [
  { id: "silk1", src: silkFabric, alt: "Pure Silk Fabric" },
  { id: "silk2", src: colorfulScarf, alt: "Colorful Scarf" },
  { id: "silk3", src: silkPainting, alt: "Silk Painting" },
  { id: "silk4", src: silkTexture, alt: "Silk Texture" }
];

const FabricsSilkScarf = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-32 bg-base-100">
      {/* Title */}

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Pure Silk & Colorful Scarf
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
       Silk is a luxurious natural fiber, originally derived from silkworm cocoons. With ancient roots along the Silk Road, it became a global symbol of refinement, artistry, and high fashion.
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

      {/* Content Sections */}
      <div className="mt-8 grid gap-6">
        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Cultural Heritage</h3>
          <p className="text-neutral mt-2">
            Once China's biggest export, silk became an essential part of global trade and cultural exchange through the Silk Road.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Versatile Use</h3>
          <p className="text-neutral mt-2">
            Beyond fashion, silk is also used in artwork, calligraphy, and luxury interior décor such as paintings and upholstery.
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Modern Appeal</h3>
          <p className="text-neutral mt-2">
            Pure silk scarves add color, elegance, and softness—ideal for luxury brands, gift items, or creative accents in premium wear.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FabricsSilkScarf;
