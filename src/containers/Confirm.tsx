
import React from 'react';
import styled from 'styled-components';
import BaseContainer from './BaseContainer'
import ConfirmLabel from '../components/ConfirmLabel'
import BackRequest from '../components/BackRequest';

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
      <ConfirmLabel />
      <Div>{comment1}<br/>{comment2}</Div>
      <BackRequest />
    </BaseContainer>
  );
}

export default Confirm;

