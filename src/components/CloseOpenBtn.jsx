const App = ({onClock, isOpen}) => {
  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-white transition ease transform duration-300`;

  return (
    <div onClick={onClock}>
      <button
        className="md:hidden flex flex-col h-8 w-9 rounded justify-center items-center"
        onClick={onClock}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
    </div>
  );
};
export default App;
