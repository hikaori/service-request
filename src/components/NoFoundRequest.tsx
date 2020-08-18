import React from "react";
import styled from "styled-components";
import { NewRequestButton } from "./Buton";

const OuterDiv = styled.div`
  text-align: center;
  background: #f5f5fa;
  padding: 5rem 0rem;
`;

function NoFoundRequest() {
  return (
    <OuterDiv>
      <span>icon</span>
      <div>お問い合わせがありません。</div>
      <div>新規お問い合わせを行うと、ここに表示されます。</div>
      <div>
        <NewRequestButton />
      </div>
    </OuterDiv>
  );
}

export default NoFoundRequest;
