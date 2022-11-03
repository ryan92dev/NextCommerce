import React from "react";
import FooterAbout from "./FooterAbout";
import FooterNewsletter from "./FooterNewsletter";

const Footer = () => {
  return (
    <div className="flex gap-6 px-4 mx-auto mb-4 max-w-7xl xl:px-0">
      <div className="flex-[1.5]">
        <FooterAbout />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold tracking-wider">Information</h3>
        <div className="flex flex-col gap-2 mt-2">
          <a href="#" className="text-sm text-gray-500">
            About Us
          </a>
          <a href="#" className="text-sm text-gray-500">
            Contact Us
          </a>
          <a href="#" className="text-sm text-gray-500">
            Terms & Conditions
          </a>
          <a href="#" className="text-sm text-gray-500">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-500">
            FAQ
          </a>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold tracking-wider">
          Customer Service
        </h3>
        <div className="flex flex-col gap-2 mt-2">
          <a href="#" className="text-sm text-gray-500">
            Shipping & Returns
          </a>
          <a href="#" className="text-sm text-gray-500">
            Secure Shopping
          </a>
          <a href="#" className="text-sm text-gray-500">
            International Shipping
          </a>
          <a href="#" className="text-sm text-gray-500">
            Affiliates
          </a>
          <a href="#" className="text-sm text-gray-500">
            Group Sales
          </a>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold tracking-wider">My Account</h3>
        <div className="flex flex-col gap-2 mt-2">
          <a href="#" className="text-sm text-gray-500">
            Sign In
          </a>
          <a href="#" className="text-sm text-gray-500">
            View Cart
          </a>
          <a href="#" className="text-sm text-gray-500">
            My Wishlist
          </a>
          <a href="#" className="text-sm text-gray-500">
            Track My Order
          </a>
          <a href="#" className="text-sm text-gray-500">
            Help
          </a>
        </div>
      </div>
      <div className="flex-1">
        <FooterNewsletter />
      </div>
    </div>
  );
};

export default Footer;
