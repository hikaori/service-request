import React from "react";
import styled from "styled-components";
import SendButton from "../components/SendButton";
import { color } from "../css/color";

const OuterDiv = styled.div`
  text-align: center;
  background: ${ color.lightGray };
  padding: 5rem 0rem;
`;

function DynamicEmptyTable() {
  return (
    <OuterDiv>
      <span>icon</span>
      <div>お問い合わせがありません。</div>
      <div>新規お問い合わせを行うと、ここに表示されます。</div>
      <div>
      <SendButton　to="/create-request/confirm" text="新規お問い合わせ"/>
      </div>
    </OuterDiv>
  );
}

export default DynamicEmptyTable;
