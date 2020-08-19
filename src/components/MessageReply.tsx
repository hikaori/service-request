import React from "react";
import styled from "styled-components";
import { device } from "../css/device";
import TextArea from "./TextArea";

const Div = styled.div`
  margin: 2rem 0;
`;
const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-context: space-between;
  & div {
    padding: 1rem;
    border-top: solid 1px;
  }
  & .input {
    width: 100%;
    @media ${device.laptop} {
      width: 60%;
    }
  }
  & .last {
    border-bottom: solid 1px;
  }
`;

function MessageReply() {
  return (
    <Div>
      <FlexDiv>
        <TextArea
          className="last"
          title="返信内容"
          isMandatory={false}
          isLast={true}
        />
      </FlexDiv>
    </Div>
  );
}

export default MessageReply;
