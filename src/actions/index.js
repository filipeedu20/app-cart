export const ADD_CARRO = "ADD_CARRO";
export const REMOVE_CARRO = "REMOVE_CARRO";

// adiciona item no carrinho de compras   
export const adiciona_carro = product => ({
  type: ADD_CARRO,
  product
});

// remove item do carrinho de compras 
export const remove_carro = product => ({
  type: REMOVE_CARRO,
  product
});
