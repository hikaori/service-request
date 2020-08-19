
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
background-color:${({ theme }) => theme.bgColor};
color:${(theme)=> theme.color};
padding:1rem;
`;

interface OwnProps{ 
  bgColor: string;
  color: string;
  text: string;
}

const DynamicNotice: React.SFC<OwnProps> = ({ bgColor, color, text,}) => {
  return (
    <Div theme={{bgColor,color}}><span>icon</span>{text}</Div>
  );
}

export default DynamicNotice;