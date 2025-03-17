import React from "react";

const Footer = () => {
  return (
    <div className="bg-pink-900 h-auto text-white py-6">
      <div className="container mx-auto px-4">
        {/* Upper part of the footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold">Comments / Questions</p>
            <p className="text-sm">Feel free to reach out to us!</p>
          </div>

          <div className="mt-4 sm:mt-0 text-center sm:text-right">
            <p className="text-lg font-semibold">Privacy Policy</p>
            <p className="text-sm">Read our privacy policy and terms of service.</p>
          </div>
        </div>

        {/* Lower part of the footer */}
        <div className="border-t border-gray-600 pt-6 mt-6">
          <div className="flex justify-center space-x-6">
            {/* Social Media Icons */}
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook-f"></i> {/* Add FontAwesome icons or any icon library */}
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          {/* Copyright Section */}
          <div className="text-center mt-6 text-sm">
            <p>&copy; 2025 Your Company Name. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
