import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type Cliente = {
    id: number;
    nome: string;
    sobreNome: string;
    email: string;
}

type Props = {
    tema: string;
    seletorView: Function;
};

export default class ListaCliente extends Component<Props, { clientes: Cliente[] }> {

    constructor(props: Props) {
        super(props);
        this.state = {
            clientes: []
        };
    }

    componentDidMount() {
        M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
        fetch('http://localhost:32832/clientes')
            .then(response => response.json())
            .then(data => this.setState({ clientes: data }))
            .catch(error => console.error('Erro ao obter clientes:', error));
    }

    render() {
        return (
            <div className="container center-align">
                <div className="container">
                    <h2 className="purple-text">Clientes</h2>
                </div>
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.clientes.map((cliente, index) => (
                            <tr key={index}>
                                <td>{cliente.id}</td>
                                <td>{cliente.nome}</td>
                                <td>{cliente.sobreNome}</td>
                                <td>{cliente.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
