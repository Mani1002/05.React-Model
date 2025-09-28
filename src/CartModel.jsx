function CartModel({ setCartOpen, cartItems, setCartItems }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div
        onClick={() => setCartOpen(false)}
        className="fixed inset-0 bg-gradient-to-r from-[#f5f7fa] via-[#c3cfe2] to-[#e2ebf0] min-h-screen bg-opacity-50 absolute"
      ></div>
      <div className="relative shadow-lg max-h-[80vh] w-[500px] mx-auto rounded-xl overflow-auto pb-5">
        <div className="sticky top-0 bg-gradient-to-r from-[#a933d8] via-[#a451f6] to-[#9800ec] flex justify-between items-center py-4 px-5  font-bold text-xl text-white">
          <h1>Your Cart Items</h1>
          <button
            onClick={() => setCartOpen(false)}
            className="border cursor-pointer rounded-lg bg-gradient-to-r from-[#a933d8] via-[#a451f6] to-[#9800ec] text-white w-[100px] p-1 cursor-pointer hover:bg-gradient-to-r hover:from-[#9800ec] hover:via-[#a451f6] hover:to-[#a933d8] cursor-pointer"
          >
            Close
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className=" p-5 text-lg text-center">Your Cart is Empty !</p>
        ) : (
          cartItems.map((items) => (
            <span
              key={items.id}
              className="flex gap-5 w-[400px] h-[68px] mx-auto shadow-lg bg-white-100/70 items-center px-5 m-[7.6px] rounded-xl "
            >
              <img src={items.image} alt="Product" className="h-12 w-10" />
              <p className="text-sm flex-1  ">{items.title}</p>
              <button
                onClick={() =>
                  setCartItems((oldCart) =>
                    oldCart.filter((item) => item.id !== items.id)
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer text-red-600 flex-shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          ))
        )}
      </div>
    </div>
  );
}
export default CartModel;
