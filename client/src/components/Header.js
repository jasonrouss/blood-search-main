import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header  bg-slate-900 flex justify-between">
        <div className="logo mx-4">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              className="h-[150px]"
              src="https://raw.githubusercontent.com/jasonrouss/blood-search/refs/heads/main/bslogo.png"
              alt="Logo"
            />
          </button>
        </div>
        <button
          className="account"
          onClick={() => {
            navigate("/me");
          }}
        >
          <BiUserCircle className="text-5xl hover:cursor-pointer mx-8 text-slate-300" />
        </button>
      </div>
    </>
  );
}

export default Header;
