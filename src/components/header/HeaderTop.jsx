import React from "react";

import { NavLink } from "react-router-dom";

import { FaMapMarkerAlt } from "react-icons/fa";
function HeaderTop() {
  return (
    <div className="header_top w-full h-[70px] bg-[#f3f3f3] pt-[20px]">
      <div className="container">
        <div className="header_top__content flex justify-between items-center">
          <div className="haeder_top__content_left flex justify-between items-center max-w-[330px] gap-4">
            <NavLink to={"/map"} className="flex gap-2 items-center">
              <FaMapMarkerAlt fontSize={25} />
              <p className="text-[red] text-2xl">карта</p>
            </NavLink>
            <p className="text-[17px] mt-[2px]">Время работы: 9:00-18:00</p>
          </div>
          <div className="haeder_top__content_right">
            <a
              className="font-bold text-[18px]"
              href="tel:+996702020821"
              target="_blank"
            >
              +996 702 020821
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
