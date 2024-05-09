/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function

}

export default class ListaProdMaisConsumidosGenero extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`

        return (
            <>
            <div className="row">
                    <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s6"><a onClick={(e) => this.props.seletorView('ProdMaisConsumidos', e)} className="purple-text text-lighten-2">Produtos Mais Consumidos</a></li>
                        <li className="tab col s6"><a onClick={(e) => this.props.seletorView('ProdMaisConsumidosGenero', e)} className="purple-text text-lighten-2">Produtos Mais Consumidos Por Gênero</a></li>
                    </ul>
                    </div>
                </div>
        <div className="container">
            <div className="container center-align">
                <h2 className="purple-text">Produtos</h2>
                <h5 className="purple-text">Produtos Mais Consumidos Por Gênero</h5>

            </div>
            <ul className="collection">
            <h5 className="center-align purple-text">Feminino</h5>

            <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">favorite</i>
                        <span className="title">Gloss Labial</span> 
                            <p> 
                             R$25,00
                            </p>
                    </li>

                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">favorite</i>
                        <span className="title">Secador de Cabelo</span> 
                            <p> 
                             R$110,00
                            </p>
                    </li>
                    
                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">favorite</i>
                        <span className="title">Paleta de Sombra</span> 
                            <p> 
                             R$60,00
                            </p>
                    </li>

                    <h5 className="center-align purple-text">Masculino</h5>

                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">favorite</i>
                        <span className="title">Espuma de Barbear</span> 
                            <p> 
                             R$30,00
                            </p>
                    </li>
                  
                </ul>
            </div>
        </>
        )
    }
}