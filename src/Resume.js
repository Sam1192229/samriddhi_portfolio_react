import React from "react";
import { Link } from "react-router-dom";
import pdf from "./Samriddhi_Resume _Mishra.pdf"; // Ensure the path is correct

const Resume = () => {
  return (
    <div className="min-w-full h-screen bg-blue-400">
      <Link to="/Resume"></Link>
      <object data={pdf} type="application/pdf" width="100%" height="100%">
        <p>Alternative text - include a link <a href={pdf}>to the PDF!</a></p>
      </object>
    </div>
  );
};

export default Resume;
