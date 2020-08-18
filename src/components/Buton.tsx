
import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import ButtonLink from '@rakuten-rex/button';
import { Link } from "react-router-dom";

const ModifiedButtonLink = styled(ButtonLink)`background-color:#EF0AA1; border: none; &:hover {background-color:#FF79D1;}}`


export function NewRequestButton (){
  return (
    // <ModifiedButtonLink href="/create-request/confirm">新規お問い合わせ</ModifiedButtonLink>
    <Link to="/create-request"><ModifiedButtonLink>新規お問い合わせ</ModifiedButtonLink></Link>
  );
}

export function SendButton (){
  return (
    <Link to="/create-request/confirm"><ModifiedButtonLink>送信</ModifiedButtonLink></Link>
  );
}


