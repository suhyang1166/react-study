import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faBagShopping,
  faBarsStaggered,
  faEllipsis,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  let [width, setWidth] = useState(0);

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

  const navigate = useNavigate();

  const search = (e) => {
    if (e.key === "Enter") {
      // 입력한 검색어를 읽어와서 url을 바꿔준다
      let keyword = e.target.value;
      e.target.value = "";

      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div className="wrap">
      <section className="header-main">
        <ul className="user-service">
          {headerList.map((header) => (
            <li>{header}</li>
          ))}
          <FontAwesomeIcon className="icon01" icon={faEllipsis} />
          <FontAwesomeIcon
            className="icon02"
            icon={faBarsStaggered}
            onClick={() => setWidth(250)}
          />
        </ul>
        <div className="side-menu" style={{ width: width }}>
          <button className="closebtn" onClick={() => setWidth(0)}>
            &times;
          </button>
          <div className="side-menu-list" id="menu-list">
            {menuList.map((menu, index) => (
              <button key={index}>{menu}</button>
            ))}
          </div>
        </div>
        <div className="logo-img" onClick={() => navigate("/")}>
          <Link to="/">
            <img
              width={60}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
              alt="logo"
            ></img>
          </Link>
        </div>
        <div className="login-button">
          {authenticate ? (
            <div className="user-info" onClick={() => setAuthenticate(false)}>
              <div>
                <FontAwesomeIcon icon={faUser} className="font" />
              </div>
              <div>로그아웃</div>
            </div>
          ) : (
            <div className="user-info" onClick={() => navigate("/login")}>
              <div>
                <FontAwesomeIcon icon={faUser} className="font" />
              </div>
              <div>로그인</div>
            </div>
          )}
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
          <input
            type="text"
            placeholder="제품 검색"
            onKeyPress={(e) => search(e)}
          ></input>
        </div>
      </section>

      <section className="text-section">
        <p>회원 혜택:3만원 이상 무료배송 & 첫구매 10% 할인</p>
      </section>
    </div>
  );
};

export default Navbar;
