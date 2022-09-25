import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import'bootstrap/dist/css/bootstrap.css';
import Counter from "./components/counter";
import Counters from "./components/counters"

//ReactDOM.render();
 //const element=<h1>"hello world";</h1>
 //console.log(element);
 //ReactDOM.render(element,document.getElementById("root"));

 //createRoot(document.getElementById("root")).render(element);
 createRoot(document.getElementById("root")).render(<Counters />);

//const container = document.getElementById('root');
//const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(element);