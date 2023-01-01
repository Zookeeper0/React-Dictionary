import React from "react";
import "./Header3.css";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const Header3 = () => {
  const isAuthenticated = false;

  return (
    <header>
      <nav>
        <div className="container">
          <div className="left">
            <Link to="/" class="main__logo">
              <img src="/images/main.png" alt="PICKPICK" width="220px" />
            </Link>
            <div className="search">
              <form>
                <input placeholder="Search for YouTube keywords" />
              </form>
            </div>
          </div>
          <div className="right">
            <ul className="right__menu">
              <li className="item">
                <Link to="/" className="item__name">
                  Home
                </Link>
              </li>
              {/* <li className="item">
                <Link to="/favorite" className="item__name">
                  Favorite
                </Link>
              </li> */}
              <li className="item">
                <Link to="/mypage" className="item__name">
                  mypage
                </Link>
              </li>
              <li className="item">
                <div className="item__name">
                  Youtube
                  <div class="material-icons">keyboard_arrow_down</div>
                </div>
                <ul className="item__contents">
                  <li>
                    <a href="https://www.youtube.com/user/woowakgood">
                      Woowakgood
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/%EB%A6%B4%EC%B9%B4Lilka">
                      Lilka
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A">
                      BLACKPINK
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A">
                      BANGTANTV
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {isAuthenticated ? (
              <div className="login__auth">
                <div class="medal">
                  <div class="front">
                    <img src="/logo192.png" alt="profileUrl" />
                  </div>
                  <div class="back">
                    <Button className="back__medal">LOGOUT</Button>
                  </div>
                </div>

                <div> PICKER!!</div>
              </div>
            ) : (
              <a className="login__btn">
                <Button className="header__btn">Login</Button>
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header3;
