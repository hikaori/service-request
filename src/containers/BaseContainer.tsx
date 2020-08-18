import React from "react";
import styled from "styled-components";

const Div = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
interface OwnProps {
  children?: React.ReactNode;
}

const BaseContainer = ({ children }: OwnProps) => {
  return <Div className="Outer">{children}</Div>;
};

export default BaseContainer;
