import { Main } from "../user/main/Main";
import { Navigate, Route, Routes } from "react-router-dom"
import { Product } from "../user/Product/Product";

function App() {
  return (
    <>
      <Routes>
        <Route
            path="/*"
            element={<Main />}
        />
        <Route
            path="/kosher-brodsky/product/"
            element={<Product />}
        />
      </Routes>
    </>
  );
}

export default App;
