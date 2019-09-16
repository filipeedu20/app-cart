import React, { Component, Suspense } from "react";
import "./style.css";
import { Products } from "../api/Products";
import { ProdutoErroComponent } from "../components/ProdutoErroComponent";

const ItemComponent = React.lazy(() => import("../components/ItemComponent"));

export class Produto_view extends Component {
  state = {
    produtos: []
  };

  async componentWillMount() {
    const { items } = await Products.getProducts();
    this.setState({ produtos: items });
  }

  render() {
    return (
      <ul className="exibe_produto">
        <ProdutoErroComponent>
          <Suspense fallback={<h1>Carregando...</h1>}>
            {this.state.produtos.map(p => (<ItemComponent key={p.id} product={p} />))}
          </Suspense>
        </ProdutoErroComponent>
      </ul>
    );
  }
}
