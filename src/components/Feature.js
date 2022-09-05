import React from "react";

function Feature({ num, header, body }) {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
      <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="px-4 py-2 text-white rounded-full bg-brightRed">
            {num}
          </div>
          <h3 className="text-base font-bold md:hidden">{header}</h3>
        </div>
      </div>
      <div>
        <h3 class="hidden mt-1 mb-4 text-lg font-bold md:block">{header}</h3>
        <p className="text-darkGrayishBlue">{body}</p>
      </div>
    </div>
  );
}

export default Feature;
