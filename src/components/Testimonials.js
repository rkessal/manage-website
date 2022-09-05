import React from "react";
import Testimonial from "./Testimonial";
import avatarAnisha from "../img/avatar-anisha.png";
import avatarAli from "../img/avatar-ali.png";
import avatarRichard from "../img/avatar-richard.png";

function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold">Testimonials</h2>
        <div className="md:flex mt-24 md:flex-row md:space-x-6">
          <Testimonial
            img={avatarAnisha}
            name="Anisha Li"
            body="“Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”"
          />
          <Testimonial
            img={avatarAli}
            name="Ali Bravo"
            body="“We have been able to cancel so many other subscriptions since
            using Manage. There is no more cross-channel confusion and
            everyone is much more focused.”"
          />
          <Testimonial
            img={avatarRichard}
            name="Richard Watts"
            body="“Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps
            everyone motivated.”"
          />
        </div>
        <div className="my-16">
          <a
            href="#"
            className="p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
