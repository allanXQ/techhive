import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signin from "./pages/auth/signin";
import Signup from "./pages/auth/signup";
import ProductsDisplay from "./components/common/ProductsDisplay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/smartphones" element={<ProductsDisplay />} />
      </Route>
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
