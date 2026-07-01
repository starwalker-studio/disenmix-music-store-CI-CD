import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CartFloat } from "../components/cart/cart-float/CartFloat";
import { MobileCartDrawer } from "../components/cart/cart-mobile/MobileCartDrawer";
import { Footer } from "../components/common/footer/Footer";
import { Header } from "../components/common/header/Header";
import { useMobileScreen } from "../hooks/useMobileScreen";
import { WaveStoreRoutes } from "../routes/WaveStoreRoutes";
import { WavestoreCartRoutes } from "../routes/cart/WavestoreCartRoutes";
import { ProductDetailRoutes } from "../routes/products/ProductDetailRoutes";
import { ProductRoutes } from "../routes/products/ProductRoutes";

export const WaveStoreApp = () => {
  const { isMobileScreen } = useMobileScreen();
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const mobileRoute = () => {
    if (isMobileScreen()) {
      setCartOpen(true);
    } else {
      navigate("/user/cart");
    }
  };
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <Header />
            <WaveStoreRoutes />
            <CartFloat onClick={mobileRoute} />
            {isMobileScreen() && (
              <MobileCartDrawer
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
              />
            )}
            <Footer />
          </>
        }
      />
      <Route
        path="/shop/*"
        element={
          <>
            <Header />
            <ProductRoutes />
            <ProductDetailRoutes />
            <WavestoreCartRoutes />
            <CartFloat onClick={mobileRoute} />
            {isMobileScreen() && (
              <MobileCartDrawer
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
              />
            )}
            <Footer />
          </>
        }
      />
      <Route
        path="/user/*"
        element={
          <>
            <Header />
            <WavestoreCartRoutes />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};
