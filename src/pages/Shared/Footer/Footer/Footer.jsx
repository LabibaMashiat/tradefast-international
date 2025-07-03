import React from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-blue-950 text-primary-content w-full relative z-10">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-start gap-12 flex-wrap">

          {/* Address */}
          <div className="flex flex-col items-start gap-4 max-w-sm">
            <h3 className="text-xl font-semibold uppercase tracking-wider">Our Address</h3>
            <div className="flex items-center gap-3 text-lg">
              <FaMapMarkerAlt className="text-secondary" />
              <p>
                House #28, Road #7/C, Sector #9,<br />
                Uttara, Dhaka-1230, Bangladesh
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start gap-6 max-w-sm">
            <h3 className="text-xl font-semibold uppercase tracking-wider">Contact Us</h3>
            <a
              href="mailto:info@tradefastint.com"
              className="flex items-center gap-3 text-lg hover:text-secondary transition-colors"
            >
              <FaEnvelope className="text-secondary" />
              <span>info@tradefastint.com</span>
            </a>
            <a
              href="tel:+8801711906359"
              className="flex items-center gap-3 text-lg hover:text-secondary transition-colors"
            >
              <FaPhoneAlt className="text-secondary" />
              <span>+8801711906359</span>
            </a>
          </div>

          {/* Brands + Social Links */}
          <div className="flex flex-col items-start gap-6 max-w-sm w-full">
            <h3 className="text-xl font-semibold uppercase tracking-wider">Our Business Concerns & Social Links</h3>

            {/* True Fashion BD */}
            <div className="flex items-start gap-4">
              <a href="/truefashionbd" className="hover:text-secondary transition-colors">
                <img
                  src="/logoOfTFB.jpg"
                  alt="True Fashion BD"
                  className="h-12 w-12"
                />
              </a>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">True Fashion BD</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/1J9evPNUvZ/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg hover:text-secondary transition-colors"
                  >
                    <FaFacebookF className="text-secondary" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/true-fashion-bd/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg hover:text-secondary transition-colors"
                  >
                    <FaLinkedin className="text-secondary" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Trade Fast International */}
            <div className="flex items-start gap-4">
              <a href="/" className="hover:text-secondary transition-colors">
                <img
                  src="/logoOfTFI.jpg"
                  alt="Trade Fast International"
                  className="h-12 w-auto"
                />
              </a>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Trade Fast International</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/19xAzpTbCy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg hover:text-secondary transition-colors"
                  >
                    <FaFacebookF className="text-secondary" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/trade-fast-international/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg hover:text-secondary transition-colors"
                  >
                    <FaLinkedin className="text-secondary" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm opacity-80">
              &copy; {new Date().getFullYear()} TRUE FASHION BD &amp; TRADE FAST INTERNATIONAL. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 bg-primary text-primary-content p-3 rounded-full shadow-lg hover:bg-secondary-focus transition-colors z-50"
        style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.3)" }}
      >
        <FaArrowUp size={20} />
      </button>
    </>
  );
};

export default Footer;
