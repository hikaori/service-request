import React, { Fragment } from "react";
import styled from "styled-components";

const LabelSpan = styled.span`
  display: inline-block;
  height: 30px;
  padding: 0 1em;
  line-height: 30px;
  border: 1px solid #fff;
  border-radius: 4px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: white;
  &.red {
    background: red;
  }
  &.green {
    background: green;
  }
  &.orange {
    background: orange;
  }
  &.gray {
    background: gray;
  }
`;

interface OwnProps {
  status: string;
}

const Label: React.SFC<OwnProps> = ({ status }) => {
  const createDom = (status: string) => {
    switch (status) {
      case "新規問合わせ":
        return <LabelSpan className={"red"}>{status}</LabelSpan>;
      case "確認中":
        return <LabelSpan className={"green"}>{status}</LabelSpan>;
      case "返信あり":
      case "OPEN":
        return <LabelSpan className={"orange"}>{status}</LabelSpan>;
      case "完了":
        return <LabelSpan className={"gray"}>{status}</LabelSpan>;
      default:
        break;
    }
  };
  return <Fragment>{createDom(status)}</Fragment>;
};

export default Label;
