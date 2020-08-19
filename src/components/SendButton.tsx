
import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import ButtonLink from '@rakuten-rex/button';
import { Link } from "react-router-dom";
import { color } from "../css/color";

const ModifiedButtonLink = styled(ButtonLink)`
  background-color:${color.primaryPink};
  border: none; 
  &:hover {
    background-color:#FF79D1;
  }`

interface OwnProps{ 
  to: string
  text: string
}
const SendButton: React.SFC<OwnProps> = ({to, text}) => {
  return (
    <Link to={to}>
      <ModifiedButtonLink>{text}</ModifiedButtonLink>
    </Link>
  );
}
export default SendButton;

