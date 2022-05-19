const reducer = (state = [], action) => {
  switch (action.type) {
    case "@carrito/add":
      const carrito = action.payload;
      const data = state.filter(({ id }) => id !== carrito.id);
      return [...data, carrito];

    case "@carrito/remove":
      return state.filter(({ id }) => id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
