import React from "react";
import Header from "./Header.js";
import Aside from "./Aside.js";
import Main from "./Main.js";
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Aside />
                <Main />
            </div>
        </div>
    );
}

export default App;
