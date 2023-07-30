"use client";
import Logo from "@/img/logo";
import Container from "react-bootstrap/Container";
import { Open_Sans } from "next/font/google";
import { resources, service } from "./../Data/footer";
import Link from "next/link";
import Sent from "@/img/sent";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <div className="footer pb-5">
        <Container>
          <div className="row ">
            {/* Left */}
            <div className="col-lg-4 bottom-left">
              <Logo />
              <p className="pt-5 ">
                There are many variations of passages of available, but the
                majority have suffered.
              </p>
            </div>
            {/* Service */}
            <div className="col-lg-2 ">
              <div className="footer-service">
                <h3>Service</h3>
                <div className="service-content pt-5">
                  {service.map((item, i) => (
                    <Link key={i} href={item.link}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Resource */}
            <div className="col-lg-3 ">
              <div className="footer-resource">
                <h3>Resource</h3>
                <div className="service-content pt-5">
                  {resources.map((item, i) => (
                    <Link key={i} href={item.link}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3 ">
              <div className="footer-resource">
                <h3>Newsletter</h3>
                <div className="footer-right-content footer-right pt-5">
                  <p>Subscribe for our upcoming latest address and resources</p>
                  <div className="bottom-input mt-4">
                    <input
                      className="footer-email"
                      placeholder="email"
                      type="email"
                    />
                    <button>
                      <Sent />
                    </button>
                  </div>
                  <div className="social-icons mt-4">
                    <div className="icons">
                      <ul>
                        <li>
                          <FaFacebookF />
                        </li>
                        <li>
                          <FaInstagram />
                        </li>
                        <li>
                          <FaTwitter />
                        </li>
                        <li>
                          <FaPinterestP />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
