import React from "react";
import Footer from "@/Layout/Footer";
import HeaderNav from "@/Layout/HeaderNav";
const Layouts = ({ children }) => {
  return (
    <>
      <HeaderNav />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;
