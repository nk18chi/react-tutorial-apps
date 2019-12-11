import React from "react";
import RainBow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima unde sed
        beatae dolorem ipsa, quos et maiores optio cumque eligendi. Repudiandae
        voluptatibus numquam assumenda totam iusto provident sit facere velit?
      </p>
    </div>
  );
};

export default RainBow(About);
