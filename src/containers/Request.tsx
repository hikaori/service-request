import React, {  useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import BaseContainer from './BaseContainer'
import { NewRequestButton } from "../components/Buton";
import NoFoundRequest from "../components/NoFoundRequest";
import FoundRequest from "../components/FoundRequest";
import ShowedRestNumInfo from "../components/ShowedRestNumInfo";
import sampleRequests from "../sampleRequests";

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InlineDivRight = styled.div`
  align-items: center;
`;
const REQUEST_TOTAL = 3;

function Outer() {
  const [hasRequest, setHasRequest] = useState(true);

  useEffect(() => {
    //  setHasRequest()
  });

  return (
    <BaseContainer>
      <FlexDiv>
        <h2>お問い合わせ</h2>
        {hasRequest ? (
          <InlineDivRight>
            <NewRequestButton />
          </InlineDivRight>
        ) : (
          <div />
        )}
      </FlexDiv>
      <FlexDiv>
        <h3>お問い合わせ一覧</h3>
        {hasRequest ? <ShowedRestNumInfo totalNum={REQUEST_TOTAL} /> : <div />}
      </FlexDiv>
      {hasRequest ? (
        <Fragment>
          <FoundRequest requests={sampleRequests} />
          <div>
            <ShowedRestNumInfo totalNum={REQUEST_TOTAL} />
          </div>
        </Fragment>
      ) : (
        <NoFoundRequest />
          )}
    </BaseContainer>
  );
}

export default Outer;
