import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import { Produto_view } from "./views/ProdutoView";
import { Store } from "./store";
import Carrinho from "./views/CarrinhoView";
import { CarrinhoItens } from "./components/ContatorProdutoComponent";
const Product = lazy(() => import("./views/Product"));

function App() {
  return (
    <Provider store={Store}>
      <div id="main-app">
        <Suspense fallback={<h1>Carregando...</h1>}>
          <h1>Loja Virtual</h1>
          <BrowserRouter>
            <div className='menu'>
              <ul>
                <li><Link to="/">Início</Link> |</li>
                <li><CarrinhoItens /></li>
              </ul>              
            </div>
            <Route exact path="/" component={Produto_view} />
            <Route path="/product/:id" component={Product} />
            <Route path="/carrinho" component={Carrinho} />
          </BrowserRouter>
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
