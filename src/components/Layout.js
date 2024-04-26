import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={` w-full h-full inline-block z-1 p-32 dark:bg-dark 
      xl:p-25 lg:p-18 md:p-17 sm:p-8 xs:py-0 bg-ligth
       ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
