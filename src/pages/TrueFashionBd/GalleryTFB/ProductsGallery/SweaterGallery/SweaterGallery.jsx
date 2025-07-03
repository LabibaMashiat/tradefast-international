// src/components/GallerySections/SweatersGallery.jsx
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import sweater1 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-1-removebg-preview.png";
import sweater2 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-2-removebg-preview.png";
import sweater3 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-3-removebg-preview.png";
import sweater4 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-4-removebg-preview.png";
import sweater5 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-5-removebg-preview.png";
import sweater6 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-6-removebg-preview.png";
import sweater7 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-7-removebg-preview.png";
import sweater8 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-8-removebg-preview.png";
import sweater9 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-9-removebg-preview.png";
import sweater10 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-10-removebg-preview.png";
import sweater11 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-11-removebg-preview.png";
import sweater12 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-12-removebg-preview.png";
import sweater13 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-13-removebg-preview.png";
import sweater14 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-14-removebg-preview.png";
import sweater15 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-15-removebg-preview.png";
import sweater16 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-16-removebg-preview.png";
import sweater17 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-17-removebg-preview.png";
import sweater18 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-18-removebg-preview.png";
import sweater19 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-19-removebg-preview.png";
import sweater20 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Sweaters/CSW-removebg-preview.png";

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md rounded-full p-2"
  >
    <FaChevronLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md rounded-full p-2"
  >
    <FaChevronRight />
  </div>
);

const SweaterGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const images = [
    sweater1, sweater2, sweater3, sweater4,
    sweater5, sweater6, sweater7, sweater8,
    sweater9, sweater10, sweater11, sweater12,
    sweater13, sweater14, sweater15, sweater16,
    sweater17, sweater18, sweater19, sweater20,
  ];

  return (
    <div>
      <section id="sweatersgallery" className="mb-20 mt-20 relative">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold">Sweaters Collection</h3>
          <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
            Discover our cozy sweaters collection, crafted with premium yarns for warmth and style, perfect for every season.
          </p>
        </div>

        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <img
                src={img}
                alt={`Sweater ${index + 1}`}
                className="w-full h-[300px] object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default SweaterGallery;
