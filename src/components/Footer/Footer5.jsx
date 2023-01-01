import React from "react";
import styled from "styled-components";

const Base = styled.footer`
  padding: 30px;
  text-align: right;
  font-size: 14px;
  background-color: #fff;
`;

const Footer5 = () => {
  return (
    <Base>
      <p>&copy; 2022 eastZoo. All rights reserved</p>
    </Base>
  );
};

export default Footer5;
