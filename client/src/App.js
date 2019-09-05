import React from "react";

import Logo from "./components/logo";
import Content from "./components/content";

function App() {
    return (
        <div className="container">
            <div className="card">
                <div className="logo">
                    <Logo />
                </div>
                <div className="content">
                    <Content />
                </div>
            </div>
        </div>
    );
}
export default App;
