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
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { motion } from 'framer-motion';
import { Transition } from 'react-transition-group';
import { useRef } from "react";
const DMSans = DM_Sans({ subsets: ["latin"], weight: ["500"] });

const HeaderNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [resposniv,setResponsiv] = useState(false)
  const [open,setOpen] = useState(false)

let menuRef = useRef();

useEffect(()=>{
  let handler = (e)=>{
   if(!menuRef.current.contains(e.target)){
 setResponsiv(false)
   }
  }
  document.addEventListener('mousedown',handler)
})

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

  resposniv?document.body.style.overflow = 'hidden':document.body.style.overflow = 'auto';

  
  return (
    <>
      <Navbar
        expand="lg"
        className={`d-none d-lg-block ${showNav ? "stickynav" : "navaftar"}`}
      >
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
      {/* Mobile Nav */}

      <div className="resposniv-nav d-lg-none">
        <div className="container p-4">
          <div className={`d-flex justify-content-between p-4 ${showNav ? "stickynav" : "navaftar"}`} >
            <div className="logo">
              <Logo />
            </div>
            <div className="side-btn">
              <HiMenuAlt2 size={30} onClick={()=>setResponsiv(true)}/>
            </div>
          </div>
        </div>
        <motion.div className={`sidebar `}
        animate={{
          right: resposniv ? 0 : '-100%',
          Transition:{
            duration: 0.5
          }
        }}
        ref={menuRef}
        >
          <div className="cross" onClick={()=>setResponsiv(false)}>
            <RxCross2 size={30} />
          </div>
          <div className="d-flex justify-content-center align-items-center nav-items flex-column">
            <ul>
              {menu.map((item, i) => (
                <li key={i}>
                  <Link style={DMSans.style} className="mx-3" href="#">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="nav-btn" variant="primary">
              Contact Now
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HeaderNav;
