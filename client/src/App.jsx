import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* {Commoon Components} */}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
