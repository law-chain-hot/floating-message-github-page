import React from 'react'
import Header from './Header'
import { BrowserRouter, Route } from 'react-router-dom'


const App = ({ children }) => {
    return (
        <div>
            <Header />
            { children }
        </div>
    )
}

export default App
