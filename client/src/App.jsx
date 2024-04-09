import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import SolicitudPersona from "./pages/SolicitudPersona";

import { LoginPage } from "./pages/LoginPage";
import { TaskProvider } from "./context/tasksContext";
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/solicitudpersona" element={<SolicitudPersona />} />
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
