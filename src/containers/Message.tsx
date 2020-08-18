import React, { useContext} from "react";
import styled from "styled-components";
import BaseContainer from "./BaseContainer";
import { useParams } from "react-router-dom"
import reducer from "../reducers"
import AppContext from '../contexts/AppContext';

function Message() {
  // const initialState = { inputValue: '', selectedValue: '', clickCount: 0 }

  // const [state, dispatch] = useReducer(reducer, initialState)

  let { id } = useParams();
  const value = useContext(AppContext);

  
  return (
    <BaseContainer>
      <h1>{value}</h1>
      <h2>title</h2>
      {/* <div>state:{state.inputValue}</div> */}
          {id}
    </BaseContainer>
  );
};

export default Message;
