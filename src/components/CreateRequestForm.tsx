
import React ,{ Fragment}from 'react';
import styled from 'styled-components';

const FlexDiv = styled.div`
display: flex;
width:100%;
flex-wrap:wrap;
justify-context:space-between;
& span{
  color:#EF0AA1
}
& div{
    padding:1rem;
    border-top: solid 1px;
}
& .title{
    background-color:#f5f5fa;
    width:30%;
}
& .input{
    width:60%;
}
`;


function CreateRequestForm() {
  return (
      <Fragment>
        <FlexDiv>
          <div className="title">カテゴリ<span>必須</span></div>
          <div className="input"><select name="category"><option value="category1">category1</option></select></div>
        </FlexDiv>
        <FlexDiv>
          <div className="title">お問い合わせを記入してください<span>必須</span></div>
          <div className="input"><input/></div>
      </FlexDiv>
    </Fragment>
  );
}

export default CreateRequestForm;