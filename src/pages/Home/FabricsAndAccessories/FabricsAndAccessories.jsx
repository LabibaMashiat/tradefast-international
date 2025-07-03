
import fabricImage from '../../../assets/images/Trade Fast International/Garments Accessories/access-3.png'; // adjust the path

const FabricsAndAccessories = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Image Left */}
        <div className="w-full md:w-1/2">
          <img
            src={fabricImage}
            alt="Fabrics and Accessories"
           className="rounded-lg shadow-md max-w-[400px] w-full h-auto object-cover mx-auto"
          />
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 text-justify">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Fabrics & Accessories: Core of Modern Garment Design
          </h2>
          <p className="text-gray-600 text-lg ">
            Fabrics and accessories shape not only a garment’s appearance, but also its comfort,
            function, and sustainability. Eco-conscious materials like recycled polyester and organic
            cotton are increasingly popular. At the same time, small accessories—zippers, labels,
            buttons—add personality and reflect craftsmanship. With innovations like smart textiles
            and biodegradable trims, the future of fashion is both stylish and sustainable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FabricsAndAccessories;
