import React from "react";
import styled from "@emotion/styled";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";
import Footer5 from "./Footer5";
import Footer6 from "./Footer6";

const Space = styled.div`
  height: ${(props) => (props.height !== undefined ? props.height : "30px")};
  border-color: darkgray;
`;

const IndexFooter = () => {
  return (
    <div>
      <Footer1 />
      <Space height="100px" />
      <Footer2 />
      <Space />
      <Footer3 />
      <Space height="300px" />
      <Footer4 />
      <Space />
      <Footer5 />
      <Space />
      <Footer6 />
      <Space />
    </div>
  );
};

export default IndexFooter;
