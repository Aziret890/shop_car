import React from "react";
import "./Header.scss";
import { IoMdSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { RxAvatar } from "react-icons/rx";
import { NavLink } from "react-router-dom";
function HeaderBottom() {
  return (
    <header className="header mt-[1.5pc]">
      <div className="container">
        <div className="header__content flex justify-between items-center">
          <div className="header__content__logo">
            <div className="w-[220px] h-[80px]">
              <img
                src="https://yamato.kg/system/site_template_files/system-template-15/LogoYamato.png?1607748186"
                alt="logo image"
              />
            </div>
          </div>
          <div className="header__content__search">
            <div className="header__content__search__child ">
              <input type="text" name="" id="" />
              <IoMdSearch fontSize={60} color="white" />
            </div>
          </div>
          <div className="header__content__nav flex justify-between items-center gap-[30px]">
            <div className="header__content__nav__basket flex gap-[10px]">
              <SlBasket fontSize={45} />
              <div className="">
                <p>1 шт</p>
                <p>
                  <strong>2000 сом</strong>
                </p>
              </div>
            </div>
            <div className="header__content__nav__profile flex gap-[10px]">
              <RxAvatar fontSize={45} />
              <div className="flex flex-col">
                <NavLink to={"/"}>Вход</NavLink>
                <NavLink to={"/"}>Регистрация</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderBottom;
