import ProductCart from "./ProductCart";
import NavBar from "./NavBar";
import CartModel from "./CartModel";
import { useState } from "react";
function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) alert("Product is already in the cart");
    else {
      setCartItems((oldCart) => [...oldCart, product]);
    }
  };
  return (
    <div className="bg-gradient-to-r from-[#f5f7fa] via-[#c3cfe2] to-[#e2ebf0] min-h-screen">
      <NavBar setCartOpen={setCartOpen} cartCount={cartItems.length} />
      <ProductCart handleAddToCart={handleAddToCart} />
      {cartOpen ? (
        <CartModel
          setCartOpen={setCartOpen}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ) : null}
    </div>
  );
}

export default App;
