import React from "react";
import "./css/common.css";
import logo from "./images/starbucks_logo_only_text.png";

const Footer4 = () => {
  return (
    <div className="footer4">
      <div class="inner">
        <ul class="menu">
          <li>
            <a href="javascript:void(0)" class="green">
              개인정보처리방침
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">영상정보처리기기 운영관리 방침</a>
          </li>
          <li>
            <a href="javascript:void(0)">홈페이지 이용약관</a>
          </li>
          <li>
            <a href="javascript:void(0)">위치정보 이용약관</a>
          </li>
          <li>
            <a href="javascript:void(0)">스타벅스 카드 이용약관</a>
          </li>
          <li>
            <a href="javascript:void(0)">윤리경영 핫라인</a>
          </li>
        </ul>

        <div class="btn-group">
          <a href="javascript:void(0)" class="btn btn--white">
            찾아오시는 길
          </a>
          <a href="javascript:void(0)" class="btn btn--white">
            신규입점제의
          </a>
          <a href="javascript:void(0)" class="btn btn--white">
            사이트 맵
          </a>
        </div>

        <div class="info">
          <span>사업자등록번호 201-81-21515</span>
          <span>(주)스타벅스 코리아 대표이사 이석구</span>
          <span>TEL : 02) 3015-1100 / FAX : 02) 3015-1106</span>
          <span>개인정보 책임자 : 강기원</span>
        </div>

        <p class="copyright">
          &copy; <span class="this-year"></span> Starbucks Coffee Company. All
          Rights Reserved.
        </p>
        <img src={logo} alt="STAR BUCKS" class="logo" />
      </div>
    </div>
  );
};

export default Footer4;
