// export const CREATE_EVENT = "CREATE_EVENT"
// export const  DELETE_EVENT = "DELETE_EVENT

import react from 'react';

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

export default ActionType