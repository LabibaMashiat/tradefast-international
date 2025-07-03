import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Your product images
import shell from "../../../assets/images/Trade Fast International/Products/Shell/shell.avif";
import silk from "../../../assets/images/Trade Fast International/Products/Silk/silk1.jpg";
import pocket from "../../../assets/images/Trade Fast International/Products/Pocketing/pocketing.avif";
import waistband from "../../../assets/images/Trade Fast International/Products/Waistbands/waistband.jpeg";
import metal from "../../../assets/images/Trade Fast International/Products/Metal/metal.webp";

// Custom arrows
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-2xl text-white lg:bg-primary lg:rounded-3xl lg:p-4"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-2xl  text-white lg:bg-primary lg:rounded-3xl lg:p-4"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

const products = [
  {
    id: 6,
    name: "Pure Silk & Colorful Scarf",
    description: "Luxurious pure silk scarves inspired by ancient traditions, known for their softness, vibrancy, and timeless appeal.",
    image: silk,
    link: "/products",
  },
  {
    id: 7,
    name: "Fabrics for Shell",
    description: "High-quality shell fabrics ranging from cotton, linen, and blends to suit denim, casual, and formal wear needs.",
    image: shell,
    link: "/products",
  },
  {
    id: 8,
    name: "Fabrics for Pocketing",
    description: "Durable pocketing fabrics in plains, twills, HB weaves, and prints, available in cotton, poly-cotton, and polyester.",
    image: pocket,
    link: "/products",
  },
  {
    id: 9,
    name: "Pre-Constructed Waistbands",
    description: "Pre-constructed waistbands with stretch, gripper, and curtain options for enhanced fit and comfort in dress and casual pants.",
    image: waistband,
    link: "/products",
  },
  {
    id: 10,
    name: "Metal Accessories",
    description: "Versatile metal accessories—buttons, zippers, buckles, and more—crafted from durable alloys for fashion and industrial use.",
    image: metal,
    link: "/products",
  },
  
];

const WhatWeOffer = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};


  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="sm:text-3xl md:text-4xl text-center font-semibold  mb-4">What We Offer</h2>
  <hr />
      <p className="text-center text-lg text-gray-600 mb-12">
        Explore our diverse range of accessories categories tailored for quality and style.
      </p>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-lg h-full">
              <figure>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body text-center p-4">
                <h3 className="card-title text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link to={product.link} className="btn btn-primary btn-sm">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default WhatWeOffer;
