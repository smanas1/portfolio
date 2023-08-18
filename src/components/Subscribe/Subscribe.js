"use client";
import { BsArrowRight } from "react-icons/bs";
import { Open_Sans } from "next/font/google";
const OpenSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});
const Subscribe = () => {
  return (
    <>
      <div className="container subscribe">
        <div className="subscribe-content-wrapper">
          <h2>Subscirbe to Our Newsletter</h2>
          <p style={OpenSans.style}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority.
          </p>
        </div>
        <div className="subscribe-inputs">
          <input type="email" placeholder="Email" />
          <button>
            <BsArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
