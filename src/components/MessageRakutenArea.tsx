import React from "react";
import styled from "styled-components";
import { MessageIconRakuten } from "./MessageIcon";
import { color } from "../css/color";

const FlexDiv = styled.div`
  display:flex;
  flex-wrap: wrap;
  padding-bottom:1rem;
  justify-content: flex-end;
`;
const Div = styled.div`
    width: 350px;
    border: solid 1px ${color.lightGray};
    margin-right: 1.5rem;
    padding: 1rem;
`
interface OwnProps { 
    message: string;
    day:string
}

const MessageRakutenArea: React.SFC<OwnProps> = ({ message,day }) => {
  return (
    <FlexDiv>
        <Div>
            <div>{message}</div>
            <div className="time">{day}</div>
      </Div>
      <MessageIconRakuten/>
    </FlexDiv>
  );
}

export default MessageRakutenArea;
