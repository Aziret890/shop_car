import React from "react";
import "./Header.scss";
function HeaderBottom() {
  return (
    <header className="header">
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
            </div>
          </div>
          <div className="header__content__nav"></div>
        </div>
      </div>
    </header>
  );
}

export default HeaderBottom;
