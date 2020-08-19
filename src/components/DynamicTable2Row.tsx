import React from "react";
import styled from "styled-components";
import { RequestType } from "../types/requestType";
import Label from "./Label";
import { Link } from "react-router-dom";
import { color } from "../css/color";
const { Row, Col } = require("@rakuten-rex/grid/Grid");


const RequestRow = styled(Row)`
  background: ${color.lightGray};
  padding: 1.5rem;
  margin: 0.5rem 0;
`;

const CenterCol = styled(Col)`
  display: flex;
  align-items: center;
`;

interface OwnProps {
  request: RequestType;
}

const DynamicTable2Row: React.SFC<OwnProps> = ({ request }) => {

  const handleInputValue = (value: number) => {
    // set message id to the store
}

  const DateFormat = (date: number | undefined): string => {
    if (date === undefined) {
      return `-`;
    }
    let stringDate = `${date}`;
    return `${stringDate.slice(0, 4)}/
    ${stringDate.slice(4, 6)}/
    ${stringDate.slice(6, 8)}`;
  };

  return (
    <RequestRow>
      <CenterCol>{request.category}</CenterCol>
      <CenterCol>
        <Label status={request.status} />
      </CenterCol>
      <CenterCol>{DateFormat(request.requestDate)}</CenterCol>
      <CenterCol>{DateFormat(request.requestDate)}</CenterCol>
      {/* "/message/:id" */}
      <CenterCol onClick={()=>handleInputValue(1)}>
        <Link to="/message/1">icon</Link>
      </CenterCol>
    </RequestRow>
  );
};

export default DynamicTable2Row;
