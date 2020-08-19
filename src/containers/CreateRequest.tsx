import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import BaseContainer from './BaseContainer'
import CreateRequestForm from '../components/CreateRequestForm'
import SendButton from '../components/SendButton'

const FlexDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  & .content{
    margin:0 1rem;
  }
`

function CreateRequest() {
    
  return (
    <BaseContainer>
        <h2>新規お問い合わせ</h2>
        <div>お問い合わせの前に<a href="/">よくあるご質問</a>をご確認ください。</div>
      <CreateRequestForm/>
      <FlexDiv>
        <div className="content"><SendButton to="/create-request/confirm" text="送信"/></div>
        <div className="content"><Link to="/">キャセル</Link></div>
      </FlexDiv>  
    </BaseContainer>
  );
}

export default CreateRequest;
