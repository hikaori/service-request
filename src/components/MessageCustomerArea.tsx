import React from "react";
import styled from "styled-components";
import { MessageIcon } from "../components/MessageIcon";
import { color } from "../css/color";

const FlexDiv = styled.div`
  display:flex;
  flex-wrap: wrap;
  padding-bottom:1rem;
`;
const Div = styled.div`
    width: 350px;
    background: ${color.lightGray};
    margin-left: 1.5rem;
    padding: 1rem;
    $ .    padding-top: 1rem;
`
interface OwnProps { 
    message: string;
    day:string
}

const MessageCustomerArea: React.SFC<OwnProps> = ({ message,day }) => {
  return (
    <FlexDiv>
        <MessageIcon/>
        <Div>
            <div>{message}</div>
            <div className="time">{day}</div>
        </Div>
    </FlexDiv>
  );
}

export default MessageCustomerArea;
