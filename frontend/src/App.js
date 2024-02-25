import "./App.css";

import Menu from "./components/menu/menu.jsx";
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
function App() {
  return (
    <>
      <div className="container-scroller">
        <Menu></Menu>
        <div className="container-fluid page-body-wrapper">
          <Header></Header>
          <Main></Main>
        </div>
      </div>
    </>
  );
}

export default App;
