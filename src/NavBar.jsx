function NavBar({ setCartOpen, cartCount }) {
  return (
    <header className="sticky top-0 flex justify-between items-center py-1 md:py-2 lg:py-3 px-3 bg-gradient-to-r from-[#a933d8] via-[#a451f6] to-[#9800ec] font-bold text-xl px-7 ">
      <div class="text-white">FakeStore</div>
      <h1 className="sticky top-15  rounded-lg flex items-center justify-center gap-1 text-3xl font-extrabold text-gray-800 italic ">
        <span className="bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent p-3">
          welcome to our store
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7 text-yellow-600 mt-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
        </span>
      </h1>
      <div
        onClick={() => setCartOpen(true)}
        className="border rounded-lg py-1 bg-gradient-to-r from-[#a933d8] via-[#a451f6] to-[#9800ec] text-white px-3 font-style: italic cursor-pointer hover:bg-gradient-to-r hover:from-[#9800ec] hover:via-[#a451f6] hover:to-[#a933d8] cursor-pointer"
      >
        Cart ({cartCount})
      </div>
    </header>
  );
}
export default NavBar;
