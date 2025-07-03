import { Link } from "react-router-dom";
import tfbLogo from "/logoOfTFB.jpg"; // Adjust if necessary

const ExploreTfbButton = () => {
  return (
    <div className="text-center pt-7 sm:mt-7 md:mt-0  md:pt-0">
      <Link to="/truefashionbd">
        <button className="group w-full max-w-full mx-auto bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 text-white py-6 px-8  shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <div className="flex items-center justify-center gap-4">
            <img
              src={tfbLogo}
              alt="True Fashion BD Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-300"
            />
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-xl ">
                Explore <i className="font-semibold">True Fashion BD</i>
              </span>
              <span className="text-sm italic tracking-wide font-medium">
                A sister concern of{" "}
                <span className="underline font-semibold">
                  Trade Fast International
                </span>
              </span>
            </div>
            <svg
              className="ml-4 w-6 h-6 md:w-7 md:h-7 animate-bounce group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default ExploreTfbButton;
