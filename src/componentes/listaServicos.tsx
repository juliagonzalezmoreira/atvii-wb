/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaServicos extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <>
             <nav className="nav-extended">
            <div className="nav-content">
            <ul className="tabs tabs-transparent purple lighten-3">
            <li className="tab"><a href="#todos">Todos</a></li>
                <li className="tab"><a href="#test3">Mais Consumidos</a></li>
                <li className="tab"><a href="#test4">Mais Consumidos Por Gênero</a></li>
            </ul>
            </div>
            </nav>

            <div className="container">
            <div className="container center-align">
                <h2 className="purple-text">Serviços</h2>
            </div>
            <div id="todos">
            <ul className="collection">
                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">filter_vintage</i>
                        <span className="title">Manicure </span> 
                            <p> 
                             R$60,00
                            </p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">filter_vintage</i>
                        <span className="title">Barbeiro</span> 
                            <p> 
                             R$25,00
                            </p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">filter_vintage</i>
                        <span className="title">Corte de Cabelo</span> 
                            <p> 
                             R$30,00
                            </p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">filter_vintage</i>
                        <span className="title">Massagem</span> 
                            <p> 
                             R$110,00
                            </p>
                    </li>
                </ul>
                </div>
            </div>
            </>
        )
    }
}