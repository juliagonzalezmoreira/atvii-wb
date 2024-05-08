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
            <div className="row">
                <div className="center-align">
                    <a className="waves-effect purple lighten-3 btn">Produtos Mais Consumidos</a>
                    <a className="waves-effect purple lighten-3 btn">Produtos Mais Consumidos Por Gênero</a>
                </div>
            </div>

            
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