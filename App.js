import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { className: "container-fluid" },
    React.createElement("div", { className: "row" },
        React.createElement("div", { className: "col-6" },
            React.createElement("p", {},
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            )),
        React.createElement("div", { className: "col-6" },
            React.createElement("img", { className: "img-fluid", src: "https://picsum.photos/seed/picsum/200/300" }))
    ));



const jsxhead = <h1>kapil</h1>

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(jsxhead);
