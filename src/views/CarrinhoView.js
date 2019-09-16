import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { remove_carro } from "../actions";
import { LoadingProduct } from "../components/CarregaProdutoComponent";
const CarroProd = lazy(() => import("../components/CarrinhoProdutoComponent"));

const Carrinho = props => (
  <div>
    <ul>
      <Suspense fallback={<LoadingProduct />}>
        {props.products.map(product => (
          <CarroProd key={product.id} product={product} onRemove={props.remove_carro} />
        ))}
      </Suspense>
    </ul>    
      <div className='totalPedido'>
        <b>Total:</b> R$
        {props.products
          .reduce((acc, current) => acc + current.price, 0)
          .toFixed(2)}
      </div>    
  </div>
);

const mapStateToProps = ({ carrinho }) => {
  return { products: carrinho.products };
};

export default connect(
  mapStateToProps,
  { remove_carro }
)(Carrinho);
