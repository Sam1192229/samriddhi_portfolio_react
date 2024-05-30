import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
    className='animate-fall2'
      options={{
        strings: [
          "MERN Stack Developer",
          "Competitive Coder",
          "Writer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
