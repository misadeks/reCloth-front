import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Profile from './routes/Profile.js';
import reportWebVitals from './reportWebVitals';
import Card from './Card'
import SignIn from './routes/SignIn.js'
import SignUp from './routes/SignUp.js'
import Landing from './routes/Landing'

import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route, useNavigate,
} from "react-router-dom";

function logged(){
    const user = localStorage.getItem("user");
    if(user == null){
        return (<SignIn/>)
    }
    else {
        return (<App/>)
    }
}


const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={logged()}/>
            <Route path="/sign-in" element={logged()}/>
            <Route path="/sign-up" element={<SignUp />}/>
            <Route path="/landing" element={<Landing />}/>
        </Routes>
    </BrowserRouter>
    , rootElement);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
