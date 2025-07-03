import wovenImage from "../../../../assets/images/TruefashionBD/About Us/WovenFabrics/woven.jpg"; 

const WovenFabrics = () => {
  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-justify text-base-content leading-relaxed">
          <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4">Woven Fabric Sourcing</h2>
          <hr />
          <p className="mt-4">
            <span className="font-semibold">TRUE FASHION BD</span> partners with Bangladesh’s most trusted local mills
            to ensure consistent access to high-quality woven fabrics. These mills are selected based on their strict
            compliance standards, sustainable operations, and track record of delivering innovative textile solutions.
          </p>
          <p className="mt-4">
            Our sourcing strategy is built on reliability and responsiveness — ensuring every fabric meets
            international quality standards and evolving fashion trends.
          </p>
          <p className="mt-4">
            <span className="font-semibold">Sourcing Ratio:</span> 70% Local | 30% Imported (China, India, Pakistan)
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={wovenImage}
            alt="Woven Fabrics Sourcing"
            className="rounded-xl shadow-md w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WovenFabrics;
