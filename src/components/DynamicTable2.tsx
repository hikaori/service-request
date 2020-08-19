import React from "react";
import DynamicTable2Title from "./DynamicTable2Title";
import DynamicTable2Row from "./DynamicTable2Row";
import { RequestType } from "../types/requestType";

interface OwnProps {
  requests: RequestType[];
}

const FoundRequest: React.SFC<OwnProps> = ({ requests }) => {
  return (
    <div>
      <DynamicTable2Title />
      {requests.map((item, index) => {
        return <DynamicTable2Row key={index} request={item} />;
      })}
    </div>
  );
};
export default FoundRequest;
