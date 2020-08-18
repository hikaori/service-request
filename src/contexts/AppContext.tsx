import { createContext } from 'react'
const AppContext = createContext("sample");
export default AppContext;


// import React, { createContext, FC, useContext, useReducer } from 'react'

// type NewStateAction = Partial<S> | ((prevState: S) => Partial<S>)
// type ContextValue = {
//     globalState: S,
//     setGlobalState:(newState:NewStateAction)=> void
// }
// type S = typeof initialState

// const initialState = { inputValue: 't', selectedValue: '', clickCount: 0 }
// export const AppContext = createContext({} as ContextValue);

// export const Provider: FC<{}> = ({ children }) => { 
//     const [globalState, setGlobalState] = useReducer(
//         (prev: S, newState: NewStateAction) => { 
//             const _newState = 
//                 typof newState === 'function' ? newState(prev) : newState
//             return {...prev, ..._newState}
//         },
//         initialState,
//     )
// }