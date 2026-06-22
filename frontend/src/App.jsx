import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route 
          path="/" 
          element={<Navigate to="/forgot-password" />} 
        />

        <Route 
          path="/forgot-password" 
          element={<ForgotPassword />} 
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;