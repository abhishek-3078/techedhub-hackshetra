import React from 'react';

const BikeAnimation = () => {
  return (
    <div className="bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <div id="loop" className="w-100 h-100 border-4 border-solid border-orange-500 rounded-full relative">
          <div className="bg-gradient-to-l from-transparent via-orange-500 to-transparent absolute w-300 h-4 left-0 top-100"></div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-108 h-108 animate-drive">
        <div
          id="bike"
          className="w-25 h-24 bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/133687/motorbike.png')" }}
        ></div>
      </div>
    </div>
  );
};

export default BikeAnimation;
