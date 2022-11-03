import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Main from './Main.js'
import Nav from './NavBar.js';
import 'antd/dist/antd.css'
import { ToastContainer } from 'react-toastify';

function App() {
    return (
    <BrowserRouter>
    <Nav />
    <Main />
    <ToastContainer/>
    </ BrowserRouter>
    )
}

export default App