import React, { Component, ChangeEvent, FormEvent } from "react";
import M from "materialize-css"; 
import { atualizarCliente } from "./enuns/uri";

type Props = {
    tema: string;
    seletorView: Function;
};

type State = {
    id: string;
    nome: string;
    novoNome: string;
    sobreNome: string;
    email: string;
};

export default class FormularioAtualizacaoCliente extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: '',
            nome: '',
            novoNome: '',
            sobreNome: '',
            email: ''
        };

        this.capturarDados = this.capturarDados.bind(this);
        this.submeterFormulario = this.submeterFormulario.bind(this);
    }

    capturarDados(event: ChangeEvent<HTMLInputElement>) {
        const { id, value } = event.target;
        this.setState({ [id]: value } as Pick<State, keyof State>);
    }

    async submeterFormulario(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const { id, novoNome, sobreNome, email } = this.state; 
        try {
            const response = await fetch('http://localhost:32832/cliente/atualizar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, novoNome, sobreNome, email }) 
            });
    
            if (response.ok) {
                M.toast({ html: 'Cliente atualizado com sucesso!' });
                this.setState({ id: '', novoNome: '', sobreNome: '', email: '' }); 
            } else {
                throw new Error('Erro ao atualizar cliente!');
            }
        } catch (error) {
            M.toast({ html: error.message });
            console.error("Failed to update client:", error);
        }
    }
    

    componentDidMount() {
        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }

    render() {
        let estilo = `collection-item active ${this.props.tema}`;

        return (
            <>
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s4"><a onClick={(e) => this.props.seletorView('FormularioCadastro', e)} className="purple-text text-lighten-2">Clientes</a></li>
                            <li className="tab col s4"><a onClick={(e) => this.props.seletorView('FormularioProdutos', e)} className="purple-text text-lighten-2">Produtos</a></li>
                            <li className="tab col s4"><a onClick={(e) => this.props.seletorView('FormularioServicos', e)} className="purple-text text-lighten-2">Serviços</a></li>
                        </ul>
                    </div>
                </div>

                <div className="container center-align">
                    <h5 className="purple-text">Atualizar Cliente</h5>

                    <div className="row">
                        <form className="col s12" onSubmit={this.submeterFormulario}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input onChange={this.capturarDados} value={this.state.id} id="id" type="text" className="validate" />
                                    <label htmlFor="id" className={this.state.id ? "active" : ""}>ID do Cliente</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input onChange={this.capturarDados} value={this.state.nome} id="nome" type="text" className="validate" />
                                    <label htmlFor="nome" className={this.state.nome ? "active" : ""}>Nome Atual</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input onChange={this.capturarDados} value={this.state.novoNome} id="novoNome" type="text" className="validate" />
                                    <label htmlFor="novoNome" className={this.state.novoNome ? "active" : ""}>Novo Nome</label>
                                </div>
                                <div className="input-field col s12">
                                    <input onChange={this.capturarDados} value={this.state.sobreNome} id="sobreNome" type="text" className="validate" />
                                    <label htmlFor="sobreNome" className={this.state.sobreNome ? "active" : ""}>Sobrenome</label>
                                </div>
                                <div className="input-field col s12">
                                    <input onChange={this.capturarDados} value={this.state.email} id="email" type="email" className="validate" />
                                    <label htmlFor="email" className={this.state.email ? "active" : ""}>Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <button className="btn waves-effect purple ligthen-3" type="submit" name="action">Enviar
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                                <a onClick={(e) => this.props.seletorView('FormularioCadastroCliente', e)} className="waves-effect purple ligthen-3 btn-small">Voltar</a>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
