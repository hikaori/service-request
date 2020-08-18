
import React from 'react';

interface TopPageState {
    inputValue: string,
    selectedValue: string,
    clickCount: number,
  }
  
  interface TopPageAction {
    type: ActionType,
    payload: TopPageState,
  }
  enum ActionType {
    ACTION_INPUT_TEXT = 'ACTION_INPUT_TEXT',
    ACTION_SELECT_RADIOBUTTON = 'ACTION_SELECT_RADIOBUTTON',
    ACTION_CLICK_BUTTON = 'ACTION_CLICK_BUTTON',
  }
  
//   const initialState = { inputValue: '', selectedValue: '', clickCount: 0 }
  
  const reducer: React.Reducer<TopPageState, TopPageAction> = (state: TopPageState, action: TopPageAction) => {
    switch (action.type) {
        case ActionType.ACTION_CLICK_BUTTON:
            console.log('reducer'+action.payload.clickCount)
            return {
                ...state,
                inputValue: action.payload.inputValue
            }
        default:
            return {...state}
    }
  }

  export default  reducer