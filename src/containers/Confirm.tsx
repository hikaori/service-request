
import React from 'react';
import styled from 'styled-components';
import BaseContainer from './BaseContainer'
import DynamicNotice from '../components/DynamicNotice'
import BackRequest from '../components/BackRequest';
import { color } from '../css/color'

const Div = styled.div`margin: 1em 0;`;

interface OwnProps{ 
  title: string,
  comment1: string,
  comment2?:string,
}

const Confirm:React.SFC<OwnProps> =({title,comment1,comment2})=>{
  return (
    <BaseContainer>
      <h2>{title}</h2>
      <DynamicNotice text="お問い合わせを受け付けました。" bgColor={color.lightGreen} color={color.darkGreen}/>
      <Div>{comment1}<br/>{comment2}</Div>
      <BackRequest />
    </BaseContainer>
  );
}

export default Confirm;

