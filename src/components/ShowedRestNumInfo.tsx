import React from "react";
import styled from "styled-components";

const ShowedRestNumInfoDiv = styled.div`
  display: inline-block;
  float: right;
`;

interface OwnProps {
  totalNum: number;
}

const ShowedRestNumInfo: React.SFC<OwnProps> = ({ totalNum }) => {
  return (
    <ShowedRestNumInfoDiv>
      全{totalNum}件中、1-{totalNum}件を表示中
    </ShowedRestNumInfoDiv>
  );
};

export default ShowedRestNumInfo;
