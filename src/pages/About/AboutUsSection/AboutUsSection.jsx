
import fabricImage from '../../../assets/images/Trade Fast International/Garments Accessories/access-1.jpg'; // adjust the path

const AboutUsSection = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Image Left */}
        <div className="w-full md:w-1/2">
          <img
            src={fabricImage}
            alt="Fabrics and Accessories"
           className="rounded-lg shadow-md max-w-[500px] w-full h-auto object-cover mx-auto"
          />
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 text-justify">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            About Us: Trade Fast International
          </h2>
          <p className="text-gray-600 text-lg ">
            Trade Fast International (TFI) is a trusted partner for fashion brands and apparel manufacturers, offering high-quality textiles and accessories. We deliver innovative, sustainable fabric solutions with a focus on quality, consistency, and the evolving needs of the fashion industry—helping brands reduce environmental impact while meeting modern market demands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
