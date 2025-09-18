import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobeAsia,
  FaFlag,
  FaLinkedin,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="min-h-screen bg-base-100 py-10 px-4 md:px-16 lg:px-32">
      {/* Contact Person at the Top */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
    Contact
  </h1>

        <p className="mt-4 text-lg font-medium">Mohammad Showkot Hossain</p>
        <p className="text-sm text-neutral">Business Head</p>

        <div className="mt-4 flex flex-col items-center gap-2">
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-primary" />
            <a href="tel:+8801711906359" className="text-blue-500 hover:underline">
              +8801711906359
            </a>
          </p>

          <p className="flex items-center gap-2">
            <FaEnvelope className="text-primary" />
            <a href="mailto:info@tradefastint.com" className="text-blue-500 hover:underline">
              info@tradefastint.com
            </a>
          </p>

          <p className="flex items-center gap-2">
            <FaLinkedin className="text-primary" />
            <a
              href="http://www.linkedin.com/in/mohammad-showkot-hossain-48886681"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      {/* Office Locations */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Head Office */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-secondary flex items-center gap-2">
              <FaMapMarkerAlt /> Registration Office (Bangladesh)
            </h2>
            <p>76, DIT Road.  A.M.Plaza (1st Floor) , S#204, Malibagh,Dhaka-1217,Bangladesh.</p>
          </div>
        </div>
         {/* Head Office */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-secondary flex items-center gap-2">
              <FaMapMarkerAlt /> Marketing Office (Bangladesh)
            </h2>
            <p>House #28 (4th Floor), Road #7/C, Sector #9,</p>
            <p>Uttara, Dhaka-1230, Bangladesh</p>
          </div>
        </div>

        {/* UK Office */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-secondary flex items-center gap-2">
              <FaFlag /> Overseas Office (UK)
            </h2>
            <p>55 High Street Royston</p>
            <p>Hertfordshire SG8 9AW, United Kingdom</p>
          </div>
        </div>

        {/* China Office */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-secondary flex items-center gap-2">
              <FaGlobeAsia /> China Sourcing Office
            </h2>
            <p>No.345, Building 4, Yunhuicheng,</p>
            <p>Wuchang Subdistrict, Yuhang Area,</p>
            <p>Hangzhou City, China</p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-16">
        <h2 className="sm:text-3xl md:text-4xl font-semibold mb-2 text-center">
          <FaMapMarkerAlt /> Find Us on Map
        </h2>
        <hr />
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg my-6">
          <iframe
            title="TRUE FASHION BD Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.607891982389!2d90.39586567536246!3d23.79639608683811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c42e6b30bbf9%3A0x65019c2e13cbf3e4!2sSector%209%2C%20Uttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1720113616303!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
