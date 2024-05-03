/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaProdutos extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`

        return (
            <>
            <nav className="nav-extended">
            <div className="nav-content">
            <ul className="tabs tabs-transparent purple lighten-3">
                <li className="tab"><a className="active" href="#test2">Por Gênero</a></li>
                <li className="tab disabled"><a href="#test3">Maior Consumo (Valor)</a></li>
                <li className="tab"><a href="#test4">Maior Consumo Produtos</a></li>
                <li className="tab"><a href="#test4">Maior Consumo Serviços</a></li>
                <li className="tab"><a href="#test4">Maior Consumo Produtos</a></li>
                <li className="tab"><a href="#test4">Maior Consumo Serviços</a></li>
            </ul>
            </div>
            </nav>
            <div className="container">
            <div className="container center-align">
                <h2 className="purple-text">Produtos</h2>
            </div>
            <ul className="collection">
                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">favorite</i>
                        <span className="title">Paleta de Sombra</span> 
                            <p> 
                             R$60,00
                            </p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">favorite</i>
                        <span className="title">Gloss Labial</span> 
                            <p> 
                             R$25,00
                            </p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">favorite</i>
                        <span className="title">Espuma de Barbear</span> 
                            <p> 
                             R$30,00
                            </p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">favorite</i>
                        <span className="title">Secador de Cabelo</span> 
                            <p> 
                             R$110,00
                            </p>
                    </li>
                </ul>
            </div>
        </>
        )
    }
}