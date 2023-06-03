import { Outlet, Link } from "react-router-dom";
import "../../GeneralStyles/GeneralStyles.scss";
import "./Layout.scss";
import Bag from "../../imgs/bag.png";
import Report from "../../imgs/report.png";
import Setting from "../../imgs/setting.png";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const listItemClass = isActive ? "active" : "li";
  return (
    <div className="parent">
      <nav className="navbar">
        <div>
          <ul>
            <li className={`li ${listItemClass}`} onClick={handleClick}>
              {/* <img src={<FontAwesomeIcon icon={faShoppingCart} />} alt="" className="cart" />
               */}
              <div>
                <FontAwesomeIcon className="cart" icon={faShoppingCart} />
              </div>
              <Link className="text" to="/">
                Yangi <br /> Buyurtmalar
              </Link>
            </li>
            <li className={`li ${listItemClass}`} onClick={handleClick}>
              <img src={Bag} alt="" />
              <Link className="text" to="/amaldagibuyurtmalar">
                Amaldagi <br /> buyurtmalar
              </Link>
            </li>
            <li className={`li ${listItemClass}`} onClick={handleClick}>
              <img src={Report} alt="" />
              <Link className="text" to="/hisobot">
                Hisobot
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={`li ${listItemClass}`} onClick={handleClick}>
              <img src={Setting} alt="" />
              <Link className="text" to="/settings">
                Qo'shimcha sozlamalar
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
