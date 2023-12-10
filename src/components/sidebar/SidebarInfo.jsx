const SidebarInfo = ({ visible, setVisible, children }) => {
  return (
    <>
      {visible ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-4 top-4 z-50"
          onClick={() => setVisible(null)}
        >
          x
        </button>
      ) : null}

      <div
        className={`top-0 right-0 w-[30vw] rounded-l-xl bg-[#2d2d2d] p-8 text-white fixed h-full z-40 ease-in-out duration-300 ${
          visible ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default SidebarInfo;
