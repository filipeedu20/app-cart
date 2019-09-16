import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const contadorProduto = props => (
  <>
    <Link to="/carrinho"> Carrinho  ({props.total})</Link>
  </>
);

const mapStateToProps = ({ carrinho }) => ({ total: carrinho.products.length });
export const CarrinhoItens = connect(mapStateToProps)(contadorProduto);
