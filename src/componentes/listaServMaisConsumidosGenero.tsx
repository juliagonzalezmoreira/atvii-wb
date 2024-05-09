/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

export default function ListaServMaisConsumidosGenero(props) {
    
        let estilo = `collection-item active ${props.tema}`
        return (
            <>

        <div className="row">
                    <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s6"><a onClick={(e) => props.seletorView('ServMaisConsumidos', e)} className="purple-text text-lighten-2">Serviços Mais Consumidos</a></li>
                        <li className="tab col s6"><a onClick={(e) => props.seletorView('ServMaisConsumidosGenero', e)} className="purple-text text-lighten-2">Serviços Mais Consumidos Por Gênero</a></li>
                    </ul>
                    </div>
                </div>

            <div className="container">
            <div className="container center-align">
                <h2 className="purple-text">Serviços</h2>
                <h5 className="purple-text">Serviços Mais Consumidos Por Gênero</h5>

            </div>
            <ul className="collection">
            <h5 className="center-align purple-text">Feminino</h5>

                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">filter_vintage</i>
                        <span className="title">Manicure </span> 
                            <p> 
                             R$60,00
                            </p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">filter_vintage</i>
                        <span className="title">Massagem</span> 
                            <p> 
                             R$110,00
                            </p>
                    </li>
                    
                    <h5 className="center-align purple-text">Masculino</h5>

                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">filter_vintage</i>
                        <span className="title">Corte de Cabelo</span> 
                            <p> 
                             R$30,00
                            </p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons tiny circle purple lighten-2">filter_vintage</i>
                        <span className="title">Barbeiro</span> 
                            <p> 
                             R$25,00
                            </p>
                    </li>
                    
                </ul>
                </div>
            </>
        )
}