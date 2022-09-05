import React from "react";

function ClickToAction() {
  return (
    <section className="bg-brightRed">
      <div className="container flex flex-col items-center justify-between px-4 py-24 mx-auto space-y-12 md:py-12 md:space-y-0 md:flex-row ">
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>
        <a
          href="#"
          className="p-3 px-6 text-brightRedLight bg-white rounded-full baseline"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default ClickToAction;
