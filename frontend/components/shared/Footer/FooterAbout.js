import React from "react";

const FooterAbout = () => {
  return (
    <>
      {" "}
      <h3 className="text-xl font-semibold tracking-wider">About Us</h3>
      <p className="pr-4 mt-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quod, quia, voluptates quae voluptatibus quibusdam
        accusantium quidem quas dolorum natus. Quisquam, quae. Quisquam
      </p>
      <div>
        {/* <h3 className="mt-4 text-xl font-semibold tracking-wider">Follow Us</h3> */}
        <div className="flex gap-2 mt-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default FooterAbout;
