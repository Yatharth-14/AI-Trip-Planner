// import React from 'react'
import { Button } from "../ui/button";

const Header = () => {
  return (
    <>
      <div className="px-5 flex justify-between items-center">
        <img src="/logo2.svg" alt="logo" height="90px" width="90px" className="cursor-pointer" />
        <div>
          <Button>Sign In</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
