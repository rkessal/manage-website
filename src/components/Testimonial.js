import React from "react";

function Testimonial({ img, name, body, hidden }) {
  return (
    <div
      className={`flex flex-col items-center mb-14 p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3`}
    >
      <img src={img} className="w-16 -mt-14" />
      <h5 className="text-lg fond-bold">{name}</h5>
      <p className="text-sm text-darkGrayishBlue">{body}</p>
    </div>
  );
}

export default Testimonial;
