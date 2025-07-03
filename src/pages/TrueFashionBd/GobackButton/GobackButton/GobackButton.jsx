import { Link } from "react-router-dom";
import tfiLogo from "/logoOfTFI.jpg"; // ✅ Replace with actual logo path

const GobackButton = () => {
  return (
    <div className="text-center pt-7 sm:mt-7 md:mt-0  md:pt-0">
      <Link to="/">
        <button className="group w-full max-w-full mx-auto bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 text-white py-6 px-8  shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
          <div className="flex items-center justify-center gap-3">
            {/* ⬅️ Back arrow */}
            <svg
              className="mr-2 w-5 h-5 transform group-hover:-translate-x-1 transition duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            {/* Text + logo */}
            <h5 className="text-base md:text-lg font-medium flex items-center gap-2">
              Go back to{" "}
              <span className="font-semibold inline-flex items-center gap-2">
                Trade Fast International
                <img
                  src={tfiLogo}
                  alt="TFI Logo"
                  className="w-8 h-8 object-contain rounded-full border border-gray-300 shadow-sm"
                />
              </span>
            </h5>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default GobackButton;
