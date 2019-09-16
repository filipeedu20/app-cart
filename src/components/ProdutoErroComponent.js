import React, { Component } from "react";

export class ProdutoErroComponent extends Component {
  state = { erro: false };

  static getDerivedStateFromError() {
    return { erro: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Erro ao carregar os produtos </h2>;
    }

    return this.props.children;
  }
}
