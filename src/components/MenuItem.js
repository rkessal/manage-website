import React from "react";

function MenuItem({ name, link }) {
  return (
    <a className="hover:text-darkGrayishBlue" href={link}>
      {name}
    </a>
  );
}

export default MenuItem;
