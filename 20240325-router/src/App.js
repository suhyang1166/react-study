import { useState } from "react";
import "./App.css";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import { Routes, Route, Navigate } from "react-router-dom";
import ProdutPage from "./page/ProdutPage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/LoginPage";
import UserPage from "./page/UserPage";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate == true ? (
      <UserPage></UserPage>
    ) : (
      <Navigate to="/login"></Navigate>
    );
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/about" element={<Aboutpage></Aboutpage>}></Route>
        <Route path="/products" element={<ProdutPage></ProdutPage>}></Route>
        <Route
          path="/products/:id"
          element={<ProductDetailPage></ProductDetailPage>}
        ></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/user" element={<PrivateRoute></PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
