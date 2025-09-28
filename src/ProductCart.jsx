import React, { useState, useEffect, use } from "react";
function ProductCart({ handleAddToCart }) {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch {
        console.error("Error fetching products");
      }
    };
    fetchProducts();
  }, []);
  return (
    <main className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3  max-w-6xl mx-auto">
      {Products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col rounded-lg p-3 gap-3 shadow-xl border bg-white-100/70"
        >
          <img
            src={product.image}
            alt="Product"
            className="h-[230px] mx-auto"
          />
          <div className="flex items-center gap-3 justify-between px-2">
            <p className="text-xs h-9 flex items-center">{product.title}</p>
            <p className="text-sm font-bold text-green-500">${product.price}</p>
          </div>
          <span
            onClick={() => handleAddToCart(product)}
            className="rounded-lg flex justify-center items-center w-full py-1 bg-gradient-to-r from-[#a933d8] via-[#a451f6] to-[#9800ec] text-white w-[150px] font-style: italic cursor-pointer hover:bg-gradient-to-r hover:from-[#9800ec] hover:via-[#a451f6] hover:to-[#a933d8] cursor-pointer"
          >
            Add to Cart
          </span>
        </div>
      ))}
    </main>
  );
}
export default ProductCart;
