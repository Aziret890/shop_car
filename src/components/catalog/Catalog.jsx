import React, { useEffect, useState } from "react";
import "./Catalog.scss";

function Catalog() {
  const [scrollPx, setScrollPx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPx(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollPx);
  }, [scrollPx]);

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__content">
          <div className="catalog__content__child">
            <h1>{"aaa"}</h1>
            <img
              src="https://yamato.kg/system/menu_item_icons/75/antifreez_original.png?1607800453"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
