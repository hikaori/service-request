
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
background-color:#BFF4BF;
color:#009500;
padding:1rem;
`;

function ConfirmLabel() {
  return (
    <Div><span>icon</span>お問い合わせを受け付けました。</Div>
  );
}

export default ConfirmLabel;