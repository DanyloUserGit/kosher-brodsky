import { Main } from "../user/main/Main";
import { Navigate, Route, Routes } from "react-router-dom"
import { Product } from "../user/Product/Product";
import { Catalog } from "../user/Catalog/Catalog";

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
        <Route 
          path="/kosher-brodsky/product-category/*"
          element={<Catalog />}
        />
      </Routes>
    </>
  );
}

export default App;
