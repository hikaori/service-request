
import React from 'react';
import styled from 'styled-components';
const { Row,  Col } = require('@rakuten-rex/grid/Grid')

const TitleRow = styled(Row)`
padding:0 1.5rem;
margin:0;
`;

function RowTitle() {
  return (
    <TitleRow>
        <Col>カテゴリ</Col>
        <Col>お問い合わせ情報</Col>
        <Col>お問合わせ日</Col>
        <Col>最終更新日</Col>
        <Col>{/* arrow */}</Col>
      </TitleRow>
  );
}

export default RowTitle
;
