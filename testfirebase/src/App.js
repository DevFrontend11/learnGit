import { Route, Routes } from "react-router-dom";
import "./App.css";
import Firebase from "./component/Firebase";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Firebase></Firebase>}></Route>
      </Routes>
    </div>
  );
}

export default App;
