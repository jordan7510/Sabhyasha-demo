import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const navLinks = [
    {
      name: "Home",
      href:"/"
    },
    
    {
      name: "Category",
      href:"/"
    },
    {
      name: "Product",
      href:"/"
    },
    {
      name: "Blog",
      href:"/",
    },
    {
      name:"Contact",
      href:"/"
    },
    {
      name: "Shop",
      href:"/"
    }
  ]
  



const Headers = () => {

    const [isNavShow, setNavShow] = useState(false);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 90;
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck);
          }
        });
      });


  return (
    <header className={`fixed  z-[100] bg-[#F8EBE1] duration-300 top-0 right-0 left-0 py-8 ${scroll ? "shadow-lg" : ""}`}>
          <nav className="flex  flex-col md:flex-row container  items-center justify-between">
            <div className="flex items-center w-full justify-between">
              <Link to="/">
                <h2 className="text-2xl font-semibold font-lora">Logo</h2>
              </Link>
              <button
                onClick={() => setNavShow(!isNavShow)}
                className="text-2xl block md:hidden text-[#000642]"
              >
                {isNavShow ? <CgClose></CgClose> : <FaBars></FaBars>}
              </button>
            </div>

            <ul
              className={`flex md:shadow-none shadow-lg duration-300 bg-[#F5FAFF] md:bg-transparent absolute md:static flex-col  md:backdrop-blur-0 backdrop-blur-3xl left-0 right-0 md:flex-row py-8 md:py-0 md:items-center gap-3 ${
                isNavShow ? "top-[85px]" : "-top-96"
              }`}
            >
              {
                navLinks?.map((link,i) => {

                  return <li className="relative px-3" key={i}>
                  <NavLink
                    className={` capitalize font-lora  text-lg text-[#000642] duration-300 hover:text-[#B18B5E] font-medium`}
                    to={link.href}
                    onClick={()=>setTimeout(()=>setNavShow(false), 200)}
                  >
                    {link.name}
                  </NavLink>
                </li>
                })
              }
              
            </ul>
          </nav>
        </header>
  );
};

export default Headers;
