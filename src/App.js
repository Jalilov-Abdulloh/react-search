import React from 'react';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

function App(props) {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;