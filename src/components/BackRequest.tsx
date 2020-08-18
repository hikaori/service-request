import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  color: #002896;
  & a {
    text-decoration: none;
  }
`;

function BackRequest() {
  return (
    <Div>
      <Link to="/">
        <span>icon</span>お問い合わせ画面に戻る
      </Link>
    </Div>
  );
}

export default BackRequest;
