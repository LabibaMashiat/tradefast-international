import { Link } from "react-router-dom";
import heroImage from '../../../../assets/images/TruefashionBD/Garments/garmentspic4.jpg'; // Adjust path as needed

const Banner = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>

      <div className="relative text-center text-white max-w-md z-10">
        <h1 className="mb-5 text-5xl font-semibold">Welcome to True Fashion BD</h1>
        <p className="mb-5 text-lg">Explore our premium garments and vibrant gallery</p>
        <div className="flex justify-center gap-4">
          <Link to="/truefashionbd/products">
            <button className="btn btn-primary px-6 text-white">Explore Our Products</button>
          </Link>
          <Link to="/truefashionbd/gallery">
            <button className="btn btn-secondary px-6 text-white">Explore Our Gallery</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;