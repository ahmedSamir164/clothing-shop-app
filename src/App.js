import { Routes, Route } from "react-router-dom";
import Home from "./routers/home/home.component";
import Navigation from "./routers/nav/navigation.component";
import Authentication from "./routers/authentication/authentication.component";
import Shop from "./routers/shop/shop.component";
import Checkout from "./routers/checkout/checkout.component";
import Hats from "./routers/shop/hats.component";
import Jackets from "./routers/shop/jackets.component";
import Mens from "./routers/shop/mens.component";
import Sneakers from "./routers/shop/sneakers.component";
import Womens from "./routers/shop/womens.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
