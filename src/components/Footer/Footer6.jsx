import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  margin-top: 15px;
  background-color: #222;
  color: #bbb;
  @media all and (max-width: 1536px) {
    margin-top: 0;
  }
`;
const Copy = styled.div`
  width: 1600px;
  margin: 0 auto;
  text-align: right;
  @media all and (max-width: 960px) {
    width: 960px;
  }
  @media all and (max-width: 1536px) {
    width: 1330px;
  }
`;
const Footer6 = () => {
  return (
    <Footer>
      <Copy>copyright &copy; by eastzoo All Right Reserves</Copy>
    </Footer>
  );
};

export default Footer6;
