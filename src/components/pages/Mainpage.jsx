import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Base = styled.div`
  width: 100%;

  height: 80px;
  text-align: center;
  background-color: #cecece;
`;

const Inner = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 1200px;
  height: 100%;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: #5a5a5a;
  font-size: 20px;
  display: block;
  margin-inline: 10px;
`;

const Mainpage = () => {
  return (
    <Base>
      <Inner>
        <ButtonLink to="/header">Header</ButtonLink>
        <ButtonLink to="/footer">Footer</ButtonLink>
      </Inner>
    </Base>
  );
};

export default Mainpage;
