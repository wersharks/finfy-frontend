import SignInSide from "./components/Login.js";
import SignUpSide from "./components/Register.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route exact path="/signin" element={<SignInSide />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<SignUpSide />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
