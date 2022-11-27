import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Main from './Main.js'
import Nav from './NavBar.js';
import 'antd/dist/antd.css'
import { ToastContainer } from 'react-toastify';
import CustomProvider from './CustomProvider.js';
import { app } from "./firebase"


function App() {

    return (
            <CustomProvider children = {
            <BrowserRouter>
                < Nav/>
                <Main />
                <ToastContainer/>
            </BrowserRouter>}/>
    )
}

export default App