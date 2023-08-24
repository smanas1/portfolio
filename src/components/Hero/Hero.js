"use client";
import Be from "@/img/Be";
import Dribble from "@/img/Dribble";
import Insta from "@/img/insta";
import Image from "next/image";

import { BsArrowUpRight } from "react-icons/bs";
import heroimage from "../../img/hero.webp";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className={`container ${showNav ? `hero-wrapper` : `contianer`}`}>
        <div className="row">
          <div className="col-md-6 ">
            <div className="hero">
              <h1 className="hero-title">
                <span className="creative"> Creative</span> Design and Work
                <span className="solution">Solution</span>
              </h1>
              <p className="hero-p">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
              <div className="hero-buttons my-5 ">
                <button> Say Hello</button>
                <h5 className="work">My Work</h5>
                <BsArrowUpRight />
              </div>
              <div className="social">
                <p>Follow me on</p>
                <div className="social-wrapper">
                  <Be />
                  <Dribble />
                  <Insta />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mt-5 hero-image">
              <Image width={600} src={heroimage} alt="ad" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
