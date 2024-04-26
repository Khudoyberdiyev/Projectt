import React from "react";
import RightIcon from "../assets/icon/RightIcon";
import Icon from "../assets/icon/Icon";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="container">
      <div className=" sticky flex justify-center items-center text-center rounded bg-[#FF9500] py-[14px]">
        <h1 className="header-title text-white">
          Free Courses 🌟 Sale Ends Soon, Get It Now
        </h1>
        <span className="pl-5">
          <RightIcon />
        </span>
      </div>

      <div className="container border-b-2 border-slate-100">
        <div className="flex text-center items-center justify-between mx-[120px]">
          <nav className="rounded-xl flex items-center">
            <span>
              <Icon />
            </span>
            <div className="hidden sm:block">
              {" "}
              <ul className="flex items-center justify-between rounded-lg px-9 ">
                <li className="hover:bg-slate-200 hover:rounded hover:transition-all px-5 py-1">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="hover:bg-slate-200 hover:rounded hover:transition-all px-5 py-1">
                  <NavLink to="course">Courses</NavLink>
                </li>
                <li className="hover:bg-slate-200 hover:rounded hover:transition-all px-5 py-1">
                  <NavLink to="about">About Us</NavLink>
                </li>
                <li className="hover:bg-slate-200 hover:rounded hover:transition-all px-5 py-1">
                  <NavLink to="pricing">Pricing</NavLink>
                </li>
                <li className="hover:bg-slate-200 hover:rounded hover:transition-all px-5 py-1">
                  <NavLink to="contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <button className="hover:bg-amber-500 hover:text-white hover:rounded px-6 py-1">
              <NavLink to="signup">Sign In</NavLink>
            </button>
            <button className="hover:bg-amber-500 hover:text-white hover:rounded px-6 py-1">
              <NavLink to="login">Login</NavLink>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
