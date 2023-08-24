"use client";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import menu from "@/Data/menu";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import Logo from "@/img/logo";
import { useEffect, useState } from "react";

const DMSans = DM_Sans({ subsets: ["latin"], weight: ["500"] });

const HeaderNav = () => {
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
      <Navbar expand="lg" className={showNav ? "stickynav" : "navaftar"}>
        <Container>
          <Link href="#">
            <Logo />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {menu.map((item, i) => (
                <Link style={DMSans.style} className="mx-3" key={i} href="#">
                  {item.title}
                </Link>
              ))}
            </Nav>

            <Button className="nav-btn" variant="primary">
              Contact Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav;
