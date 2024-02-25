import "./App.css";

import Menu from "./components/menu/menu.jsx";
import Header from "./components/header/header.jsx";

function App() {
  return (
    <>
      <div className="container-scroller">
        <Menu></Menu>
      </div>

      <div className="container-fluid page-body-wrapper">
        <Header></Header>
      </div>
    </>
  );
}

export default App;
