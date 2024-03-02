import Login from "./components/login/login";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/Dashboard" Component={Dashboard}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
