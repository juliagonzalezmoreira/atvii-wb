/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';
import { Link } from "react-router-dom";


type props = {
    tema: string
    seletorView: Function
}


export default class ListaMaiorConsumoProd extends Component<props> {
    componentDidMount() {       
        M.Collapsible.init(document.querySelectorAll('.collapsible'), {});

    }
    render() {
        let estilo = `collection-item active ${this.props.tema}`

        return (
        <>
            <div className="row">
                    <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s2"><a onClick={(e) => this.props.seletorView('PorGenero', e)} className="purple-text text-lighten-2">Gênero</a></li>
                        <li className="tab col s2"><a onClick={(e) => this.props.seletorView('MaiorConsumo', e)} className="purple-text text-lighten-2">Maior Consumo (Valor)</a></li>
                        <li className="tab col s2"><a onClick={(e) => this.props.seletorView('MaiorConsumoProd', e)} className="purple-text text-lighten-2">Maior Consumo Produtos</a></li>
                        <li className="tab col s2"><a onClick={(e) => this.props.seletorView('MaiorConsumoServ', e)} className="purple-text text-lighten-2">Maior Consumo Serviços</a></li>
                        <li className="tab col s2"><a onClick={(e) => this.props.seletorView('MenorConsumoProd', e)} className="purple-text text-lighten-2">Menor Consumo Produtos</a></li>
                        <li className="tab col s2"><a onClick={(e) => this.props.seletorView('MenorConsumoServ', e)} className="purple-text text-lighten-2">Menor Consumo Serviços</a></li>
                    </ul>
                    </div>
                </div>
            <div className="container center-align">
            <div className="container">
                <h2 className="purple-text">Clientes</h2>
                <h5 className="purple-text">Maior Consumo Produtos</h5>

            </div>
            <ul className="collapsible">
            <li className="collection-item avatar">
                        <div className="collapsible-header">
                        <i className="material-icons circle purple-text text-lighten-2">account_circle</i>
                        <span className="title">Julia Gonzalez</span> </div>
                        <div className="collapsible-body">
                            <p>
                            CPF: 123.456.789-00 <br/>
                            Gênero: Feminino
                            Produtos Consumidos em valor: R$547,00 <br/>
                            Produtos Consumidos em quantidade: 34 <br/>
                            Serviços Consumidos em valor: R$251,30 <br/>
                            Serviços Consumidos em quantidade: 8 <br/>
                        </p>
                        </div>
                    </li>
                    
                    <li className="collection-item avatar">
                        <div className="collapsible-header">
                        <i className="material-icons purple-text text-lighten-2">account_circle</i>
                        <span className="title">Pedro Oliveira</span> </div>
                        <div className="collapsible-body">
                            <p>
                            CPF: 789.123.456-00 <br/>
                            Gênero: Masculino <br/>
                            Produtos Consumidos em valor: R$286,00 <br/>
                            Produtos Consumidos em quantidade: 12 <br/>
                            Serviços Consumidos em valor: R$654,00 <br/>
                            Serviços Consumidos em quantidade: 22 <br/>
                        </p>
                        </div>
                    </li>

                    <li className="collection-item avatar">
                        <div className="collapsible-header">
                        <i className="material-icons circle purple-text text-lighten-2">account_circle</i>
                        <span className="title">Vitor Santana</span> </div>
                        <div className="collapsible-body">
                            <p>
                            CPF: 456.789.123-00 <br/>
                            Gênero: Masculino
                            Produtos Consumidos em valor: R$362,89 <br/>
                            Produtos Consumidos em quantidade: 10 <br/>
                            Serviços Consumidos em valor: R$100,00 <br/>
                            Serviços Consumidos em quantidade: 2 <br/>
                        </p>
                        </div>
                    </li>

                    <li className="collection-item avatar">
                        <div className="collapsible-header">
                        <i className="material-icons circle purple-text text-lighten-2">account_circle</i>
                        <span className="title">Ana Silva</span> </div>
                        <div className="collapsible-body">
                            <p>
                            CPF: 321.654.987-00 <br/>
                            Gênero: Feminino
                            Produtos Consumidos em valor: R$500,00 <br/>
                            Produtos Consumidos em quantidade: 5 <br/>
                            Serviços Consumidos em valor: R$259,90 <br/>
                            Serviços Consumidos em quantidade: 3 <br/>
                        </p>
                        </div>
                    </li>

                </ul>
                </div>

        </>
        )
    }
}
