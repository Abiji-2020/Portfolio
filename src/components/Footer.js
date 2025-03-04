import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="
      w-full 
      h-auto
      dark:bg-dark
      dark:text-light
      dark:border-light
       md:text-medium
      md:ml-0 md:mr-0
      md:text-sm
      md:w-full
      sm:w-full
      sm:ml-0
      lg:border-t-1
      lg:inline-block lg:w-full lg:ml-0 lg:mr-0 lg:items-center lg:justify-between
       md:items-center md:justify-between md:inline-block
      border-t-2 border-solid
      border-dark 
      font-medium
      text-lg"
    >
      <Layout className="py-8 flex items-center justify-between md:py-4 md:px-4 md:inline-block lg:inline-block  lg:my-4 lg:ml-0  lg:items-center">
        <span className="ml-[10%] items-center xs:p-9">
          {new Date().getFullYear()}&copy; All Rights Reserved.
        </span>
        <div className=" md:ml-4 flex items-center mr-[10%] md:mr-[5%] md:inline-block
        lg:items-center lg:px-12 xs:flex-auto xs:px-9">
          Build With{" "}
          <span
            className="text-primary
            dark:text-primaryDark md:py-2 
            text-3xl "
          >
            {" "}
            &#9825;
          </span>{" "}
          BY &nbsp;
          <Link href="/" className="underline underline-offset-2">
            Abinand
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
