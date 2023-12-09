import Image from "next/image";
import Link from "next/link";
import React from "react";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <main className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-center gap-6">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={118}
            height={18}
            className=" object-contain"
          />
          <p className=" text-base text-gray-700">
            Car Hub 2023 <br /> All Right Reserved &copy;{" "}
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link, index) => (
            <div className="footer__link" key={index}>
              <h3 className=" font-bold">{link.title}</h3>
              {link.links.map((item, index) => (
                <Link key={index} href={item.url} className=" text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </main>
      <main className="flex justify-between align-middle flex-wrap items-center border-t mt-10 border-gray-100 sm:px-16 px-6">
        <p>@2023 CarHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href={"/"} className=" text-gray-500">
            Privacy Policy
          </Link>
          <Link href={"/"} className=" text-gray-500">
            Terms of use
          </Link>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
