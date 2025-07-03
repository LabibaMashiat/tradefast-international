import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import NavbarTFB from "../NavbarTFB/NavbarTFB/NavbarTFB";
import GobackButton from "../GobackButton/GobackButton/GobackButton";

const TrueFashionBd = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>True Fashion BD</title>
        <meta name="description" content="Get in touch with True Fashion BD" />
      </Helmet>

      <NavbarTFB />
      <GobackButton />

      {/* Render nested pages here */}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default TrueFashionBd;
