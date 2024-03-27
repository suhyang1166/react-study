import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const headerList = ["고객 서비스", "뉴스레터", "매장찾기"];

  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  return (
    <div className="wrap">
      <section className="header-main">
        <ul className="user-service">
          {headerList.map((header) => (
            <li>{header}</li>
          ))}
          <FontAwesomeIcon icon={faEllipsis} />
        </ul>
        <div className="logo-img">
          <img
            width={60}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
            alt="logo"
          ></img>
        </div>
        <div className="login-button">
          <div className="user-info">
            <div>
              <FontAwesomeIcon icon={faUser} className="font" />
            </div>
            <div>로그인</div>
          </div>
          <div className="user-info">
            <div>
              <FontAwesomeIcon icon={faHeart} className="font" />
            </div>
            <div>즐겨찾기</div>
          </div>
          <div className="user-info">
            <div>
              <FontAwesomeIcon icon={faBagShopping} className="font" />
            </div>
            <div>쇼핑백 (0)</div>
          </div>
        </div>
      </section>
      <section className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} className="font02" />
          <input type="text" placeholder="제품 검색"></input>
        </div>
      </section>
      <section className="text-section">
        <p>회원 혜택:3만원 이상 무료배송 & 첫구매 10% 할인</p>
      </section>
    </div>
  );
};

export default Navbar;
