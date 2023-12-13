import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#F8EBE1]">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link
              href="/"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Category
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Product
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Shop
            </Link>
          </div>
          {/* ... (Repeat the pattern for other navigation links) */}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <>
            <li className="text-xl"><FaFacebook></FaFacebook></li>
            <li className="text-xl"><FaInstagram></FaInstagram></li>
            <li className="text-xl"><FaLinkedin></FaLinkedin></li>
          </>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2021 SomeCompany, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
