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

export default class ListaCliente extends Component<Props, { clientes: Cliente[], clienteSelecionado: Cliente | null, id: string }> {

    constructor(props: Props) {
        super(props);
        this.state = {
            clientes: [],
            clienteSelecionado: null,
            id: ''
        };
    }

    componentDidMount() {
        M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
        this.fetchClientes();
    }

    fetchClientes() {
        fetch('http://localhost:32832/clientes')
            .then(response => response.json())
            .then(data => this.setState({ clientes: data }))
            .catch(error => console.error('Erro ao obter clientes:', error));
    }

    fetchClienteById = () => {
        const { id } = this.state;
        fetch(`http://localhost:32832/cliente/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ clienteSelecionado: data }))
            .catch(error => console.error(`Erro ao obter cliente com ID ${id}:`, error));
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ id: event.target.value });
    }

    render() {
        return (
            <div className="container center-align">
                <div className="container">
                    <h2 className="purple-text">Clientes</h2>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="ID do Cliente"
                        value={this.state.id}
                        onChange={this.handleInputChange}
                    />
                    <button className="btn waves-effect purple ligthen-2" onClick={this.fetchClienteById}>Buscar Cliente</button>
                </div>
                {this.state.clienteSelecionado && (
                    <div>
                        <h3 className="purple-text">Cliente Selecionado</h3>
                        <p>ID: {this.state.clienteSelecionado.id}</p>
                        <p>Nome: {this.state.clienteSelecionado.nome}</p>
                        <p>Sobrenome: {this.state.clienteSelecionado.sobreNome}</p>
                        <p>Email: {this.state.clienteSelecionado.email}</p>
                    </div>
                )}
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
