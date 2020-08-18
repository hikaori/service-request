import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from './containers/Container';
import AppContext from './contexts/AppContext'

function App() { 
    console.log(AppContext)
    return (
        <AppContext.Provider value="Hello I am a provider">
        <BrowserRouter>
            <Container/>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;