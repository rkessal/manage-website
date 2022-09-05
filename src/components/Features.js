import React from "react";
import Feature from "./Feature";

function Features() {
  return (
    <section>
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col items-center space-y-12 md:w-1/2 md:items-start">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div class="flex flex-col space-y-8 md:w-1/2">
          <Feature
            key="1"
            num="01"
            header="Track company-wide progress"
            body="See how your day-to-day tasks fit into the wider vision. Go from
          tracking progress at the milestone level all the way down to the
          smallest of details. Never lose sight of the bigger picture again."
          />
          <Feature
            key="2"
            num="02"
            header="Advanced built-in reports"
            body="Set internal delivery estimates and track progress toward
          company goals. Our customisable dashboard helps you build out
          the reports you need to keep key stakeholders informed."
          />
          <Feature
            key="3"
            num="03"
            header="Everything you need in one place"
            body="Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an
            all-in-one team productivity solution."
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
