// src/components/GallerySections/KnitwearGallery.jsx
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import knit1 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Knitwear/knitwear1.jpg";
import knit2 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Knitwear/knitwear2.jpg";
import knit3 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Knitwear/knitwear3.webp";
import knit4 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Knitwear/knitwear4.avif";
import knit5 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Knitwear/knitwear5.jpg";
import knit6 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Knitwear/knitwear6.jpg";
import knit7 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Knitwear/knitwear6.webp";
import knit8 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Knitwear/knitwear7.jpg";
import knit9 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Knitwear/knitwear8.jpg";
import knit10 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Knitwear/knitwear9.webp";
import knit11 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Knitwear/knitwear8.webp";
import knit12 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Knitwear/knitwear12.jpg";
import knit13 from "../../../../../assets/images/TruefashionBD/Gallery/Products Categories/Knitwear/knitwear13.jpg";


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

const KnitWearGallery = () => {
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
    knit1, knit2, knit3, knit4, knit5, knit6,
    knit7, knit8, knit9, knit10, knit11,knit12,knit13
  ];

  return (
   <div>
     <section id="knitweargallery" className="mb-20 mt-20 relative">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold">Knitwear Collection</h3>
        <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
          Explore our range of premium knitwear including t-shirts, hoodies, and lightweight sweaters designed for comfort and style.
        </p>
      </div>

      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`Knitwear ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-xl shadow-md "
            />
          </div>
        ))}
      </Slider>
    </section>
   </div>
  );
};

export default KnitWearGallery;
