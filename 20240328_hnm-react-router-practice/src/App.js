import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체상품페이지,  로그인, 상품 상세 페이지
// 1-1. 네비게이션바
// 2. 전체 상품페이지에서 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 4. 상품디테일을 눌렀으나, 로그인이 안되어있을경우로그인 페이지가 먼저 나온다
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다
// 6. 로그아웃이 되면 상품 디테일페이지를 볼수없다, 다시 로그인 페이지가 보인다
// 7. 로그인을 하묜 로그아웃, 로그아웃 하면 로구인
// 8. 상품을 검색할 수 있다

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
