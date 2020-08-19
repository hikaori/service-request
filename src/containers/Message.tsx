import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BaseContainer from "./BaseContainer";
import Label from "../components/Label"
import MessageCustomerArea from "../components/MessageCustomerArea"
import MessageRakutenArea from "../components/MessageRakutenArea"
import MessageReply from "../components/MessageReply"
import SendButton from '../components/SendButton'


const FlexDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  & .content{
    margin:0 1rem;
  }
`

function Message() {
  return (
    <BaseContainer>
      <h1>eSIMプロファイル設定<Label status="OPEN" /></h1>
      <MessageCustomerArea message="テキストテキスト" day="2020/05/02,3:45 pm"/>
      <div>回答2件</div>
      <MessageRakutenArea message="テキストテキスト" day="2020/05/02,3:45 pm" />
      <MessageCustomerArea message="テキストテキスト" day="2020/05/02,3:45 pm" />
      <div>返信</div>
      <MessageReply />
      <FlexDiv>
      <div className="content"><SendButton to ="/message/send" text="送信"/></div>
        <div className="content"><Link to="/message/solved">解決済み</Link></div>
      </FlexDiv>

    </BaseContainer>
  );
};

export default Message;
