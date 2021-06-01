import React, {Fragment, useEffect, useState} from 'react';
import Main from "./components/Main";
import './App.css'
import Header from "./components/Header";

const App = () => {
        return (
            <Fragment>
                    <Header />
                    <Main />
            </Fragment>
        );
};

export default App;
