import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

//! Parent Component (index.js) uses render() function to render web applicaton. This method takes 2 arguments:
//* 1. the component or elements to be rendered.
//* 2. where the web page renders.
//*Component isimlendirmelerinde daima büyük harfle başlamak gerekir.
// Çünkü React, küçük harfle başlayan componentlere DOM etiketleri gibi davranır. Örneğin <div />, bir HTML div etiketini temsil eder, fakat <App /> ise bir componenti temsil eder.

ReactDOM.render(<App />, document.getElementById("root"));

//! Function and Class Components

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }

// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }