import React from "react";
import styled from "styled-components";
import { color } from "../css/color";

const Div = styled.div`
width: 100px;
height: 100px;
border-radius: 100px;
background-color: ${color.lightGray};
line-height: 100px;
text-align:center;
`
const IMG = styled.img`
  width:100px;
  height:100px;
  border-radius: 50%;
`

export const MessageIcon　= () => {
  return (
    <Div>
      <span>お客様</span>
    </Div>
  );
};

export const MessageIconRakuten = () => {
  return (
    <IMG src="https://network.mobile.rakuten.co.jp/assets/img/common/logo-fcb-rakuten.png"/>
  );
};

