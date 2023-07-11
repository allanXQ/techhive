import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signin from "./pages/auth/signin";
import Signup from "./pages/auth/signup";
import ProductsDisplay from "./components/common/ProductsDisplay";
// import { loader as rootLoader } from "./components/common/Displays/DisplaySection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          path="category/:catid"
          element={<ProductsDisplay />}
          // loader={rootLoader}
        ></Route>
        {/* <Route path="accessories" element={<ProductsDisplay />}>
          audio
          networking
          power
          storage
          display:HDMI, VGA, DVI, DisplayPort
          cables
          adapters
          keyboards
          mice
          webcams

        </Route> */}
      </Route>
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
