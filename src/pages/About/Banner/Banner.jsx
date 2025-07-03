import banner_img from "../../../assets/images/Trade Fast International/Garments Accessories/access-10.avif"

const Banner = () => {
    return (
       <div
  className="hero h-96 md:min-h-screen opacity-100 max-w-full mx-auto"
  style={{
    backgroundImage:
     `url(${banner_img})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content">
    <div className="max-w-md mt-20 sm:mt-40 py-2 text-center">
      <h1 className=" mb-7 text-2xl md:text-5xl font-semibold">Who We Are?</h1>
      <p className="lg:mb-12 font-semibold">
       - Your Trusted Partner for Innovative and Sustainable Fabric & Accessory Solutions
      </p>
    </div>
  </div>
</div>
    );
};

export default Banner;