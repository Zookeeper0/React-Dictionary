import React from "react";
import styled from "@emotion/styled";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import Header5 from "./Header5";
import Header6 from "./Header6";

const Space = styled.div`
  height: ${(props) => (props.height !== undefined ? props.height : "30px")};
  border-color: darkgray;
`;

const IndexHeader = () => {
  return (
    <div>
      <Header1 />
      <Space />
      <Header2 />
      <Space />
      <Header3 />
      <Space />
      <Header4 />
      <Space />
      <Header5 />
      <Space height="200px" />
      <Header6 />
      <Space />
    </div>
  );
};

export default IndexHeader;
