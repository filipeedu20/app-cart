import { ADD_CARRO, REMOVE_CARRO } from "../actions";

const initialState = {
  products: []
};

export const carrinho = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARRO:
      if (state.products.find(p => p.id === action.product.id)) {
        return state;
      }

      return {
        ...state,
        products: state.products.concat(action.product)
      };
    case REMOVE_CARRO:
      if (state.products.find(p => p.id === action.product.id)) {
        return {
          ...state,
          products: state.products.filter(p => p.id !== action.product.id)
        };
      }

      return state
    default:
      return state;
  }
};
