export const SidebarCart = ({ visible, setVisible, children }) => {
  return (
    <>
      {visible ? (
        <button
          className="flex text-4xl text-black items-center cursor-pointer fixed right-6 top-1 z-50"
          onClick={() => setVisible(null)}
        >
          x
        </button>
      ) : null}

      <div
        className={`overflow-scroll top-0 right-0 w-[30vw] rounded-l-xl bg-red-50 p-8 text-black fixed h-full z-40 ease-in-out duration-300 ${
          visible ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        {children}
      </div>
    </>
  );
};


