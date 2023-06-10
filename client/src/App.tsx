import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./Router";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
