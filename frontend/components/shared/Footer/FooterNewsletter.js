import React from "react";

const FooterNewsletter = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold tracking-wider">Newsletter</h3>
      <p className="mt-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex flex-col gap-2 mt-4">
        <input
          type="text"
          className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
          placeholder="Enter your email"
        />
        <button className="flex items-center justify-center text-white bg-gray-800 rounded-lg">
          <p className="px-6 py-2">Subscribe</p>
        </button>
      </div>
    </div>
  );
};

export default FooterNewsletter;
