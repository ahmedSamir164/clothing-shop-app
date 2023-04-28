import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
// import Hats from "./hats.component";
// import Jackets from "./jackets.component";
// import Mens from "./mens.component";
// import Sneakers from "./sneakers.component";
// import Womens from "./womens.component";

import "./shop.styles.scss";
import Category from "../category/category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      {/* <Route path="/jackets" element={<Jackets />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/sneakers" element={<Sneakers />} />
      <Route path="/womens" element={<Womens />} /> */}
    </Routes>
  );
};

export default Shop;
