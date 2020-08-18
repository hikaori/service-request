import React,{ useReducer,useContext } from "react";
import styled from "styled-components";
import { RequestType } from "../types/requestType";
import Label from "./Label";
import { Link } from "react-router-dom";
import reducer from '../reducers'
import ActionType from '../actions'
import AppContext from '../contexts/AppContext'
const { Row, Col } = require("@rakuten-rex/grid/Grid");


const RequestRow = styled(Row)`
  background: #f5f5fa;
  padding: 1.5rem;
  margin: 0.5rem 0;
`;

const CenterCol = styled(Col)`
  display: flex;
  align-items: center;
`;

// interface TopPageState {
//   inputValue: string,
//   selectedValue: string,
//   clickCount: number,
// }

// interface TopPageAction {
//   type: ActionType,
//   payload: TopPageState,
// }
// enum ActionType {
//   ACTION_INPUT_TEXT = 'ACTION_INPUT_TEXT',
//   ACTION_SELECT_RADIOBUTTON = 'ACTION_SELECT_RADIOBUTTON',
//   ACTION_CLICK_BUTTON = 'ACTION_CLICK_BUTTON',
// }

const initialState = { inputValue: 't', selectedValue: '', clickCount: 0 }

// const reducer: React.Reducer<TopPageState, TopPageAction> = (state: TopPageState, action: TopPageAction) => {
//   switch (action.type) {
//       case ActionType.ACTION_INPUT_TEXT:
//           return {
//               ...state,
//               inputValue: action.payload.inputValue
//           }
//       default:
//           throw new Error()
//   }
// }

interface OwnProps {
  request: RequestType;
}

const RowRequest: React.SFC<OwnProps> = ({ request }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  // const [state, dispatch] = useContext(AppContext)

  const handleInputValue = (value: number) => {
    dispatch({ type: ActionType.ACTION_CLICK_BUTTON, payload: { ...state, clickCount: value } });
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

export default RowRequest;
