export const BuyerForm = ({
  handledChange,
  setBuying,
  validation,
  handledSendOrder,
  total,
  buyer,
}) => {
  return (
    <form className="flex flex-col m-10 w-auto">
      <p className="m-10 text-lg font-semibold">Ingresa tus datos para terminar la compra...</p>
      <div className="flex-auto my-2">
        <label className="w-20">Nombre:</label>
        <input
          name="name"
          type="text"
          value={buyer.name}
          onChange={handledChange}
          required
          className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
        />
      </div>
      <div className="flex-auto my-2">
        <label className="w-20">Teléfono:</label>
        <input
          name="phone"
          type="text"
          value={buyer.phone}
          onChange={handledChange}
          required
          className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
        />
      </div>
      <div className="flex-auto my-2">
        <label className="w-20">Email:</label>
        <input
          name="email"
          type="email"
          value={buyer.email}
          onChange={handledChange}
          required
          className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
        />
      </div>
      <p>
        <strong>Total:</strong> ${total}
      </p>
      <div className="flex justify-between my-4">
        <button onClick={() => setBuying(false)}>Volver atrás</button>

        <button
          className="btn btn-danger"
          onClick={(e) => handledSendOrder(e)}
          disabled={validation ? false : true}
        >
          Comprar
        </button>
      </div>
    </form>
  );
};
