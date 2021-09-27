import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";

// const element = React.createElement("div", { children: "Hello world!" });
const jsxElement = <div>Hello, world</div>;
console.log(jsxElement);
ReactDOM.render(<App />, document.querySelector("#root"));
