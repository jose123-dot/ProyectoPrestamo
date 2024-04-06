import Login from './components/login/login';
import Signup from './components/signup/signup';
import Dashboard from './components/Dashboard/Dashboard';
import OrdenList from './components/OrdenRevision/List';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/Dashboard" Component={Dashboard}></Route>
        <Route path="/signup" Component={Signup}></Route>

        {/* //OrdenRevision */}
        <Route path="/ordenrevision" Component={OrdenList}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
