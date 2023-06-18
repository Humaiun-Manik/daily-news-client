import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-dark py-5 mt-5">
      <p className="text-white text-center fs-5">Copyright &copy; {year} Daily News.</p>
    </div>
  );
};

export default Footer;
