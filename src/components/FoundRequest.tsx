import React from "react";
import RowRequestTitle from "./RowRequestTitle";
import RowRequest from "./RowRequest";
import { RequestType } from "../types/requestType";

interface OwnProps {
  requests: RequestType[];
}

const FoundRequest: React.SFC<OwnProps> = ({ requests }) => {
  return (
    <div>
      <RowRequestTitle />
      {requests.map((item, index) => {
        return <RowRequest key={index} request={item} />;
      })}
    </div>
  );
};
export default FoundRequest;
