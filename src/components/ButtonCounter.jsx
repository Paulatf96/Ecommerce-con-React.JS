import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ButtonCounter = ({
  stock,
  addFunction,
  decreaseFunction,
  addDirectly = false,
  showAddButton = true,
  initial = 1,
  classType = true,
}) => {
  const [counter, setCounter] = useState(initial);

  const handledAdd = (stock) => {
    if (counter < stock) setCounter((prev) => prev + 1);
    if (addDirectly) handledAddFunction();
  };

  const handledDecrease = () => {
    if (addDirectly && counter > 1) decreaseFunction(counter);
    if (counter >= 2) {
      setCounter((prev) => prev - 1);
    } else {
      return counter;
    }
  };

  const handledAddFunction = () => {
    addFunction(counter);
    if (!addDirectly) {
      toast.success("¡Producto agregado al carrito!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const ButtonsContent = () => {
    return (
      <div className="flex flex-col justify-center">
        <div className="w-1/2 flex justify-between items-center">
          <div
            onClick={handledDecrease}
            className={
              classType
                ? "flex w-1/4 my-4 justify-center items-center cursor-pointer hover:bg-red-400 fs-4 rounded-2 p-2 bg-red-300 text-black fw-bolder"
                : "flex my-2 cursor-pointer hover:bg-red-400 mr-4 h-[30px] w-[30px] rounded-2 p-3 bg-red-300 text-black fw-bolder items-center justify-center"
            }
          >
            -
          </div>

          <div className=" items-center justify-center">
            <span className="text-center fw-bolder fs-4">{counter}</span>
          </div>

          <div
            onClick={() => handledAdd(stock)}
            className={
              classType
                ? "flex w-1/4 my-4 justify-center items-center cursor-pointer hover:bg-red-400 fs-4 rounded-2 p-2 bg-red-300 text-black fw-bolder"
                : "flex my-2  cursor-pointer hover:bg-red-400 mx-4 h-[30px] w-[30px] rounded-2 p-3 bg-red-300 text-black fw-bolder items-center justify-center"
            }
          >
            +
          </div>
        </div>
        {showAddButton && (
          <button
            className="itemDetailButton w-1/2"
            onClick={handledAddFunction}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    );
  };

  return ButtonsContent();
};
