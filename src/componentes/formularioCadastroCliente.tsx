import React, { Component, ChangeEvent, FormEvent } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import { cadastrarCliente } from "./enuns/uri";

type Props = {
    tema: string;
    seletorView: Function;
};

type State = {
    nome: string;
    sobreNome: string;
    email: string;
};

export default class FormularioCadastroCliente extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            nome: '',
            sobreNome: '',
            email: ''
        };

        this.capturarNome = this.capturarNome.bind(this);
        this.capturarSobreNome = this.capturarSobreNome.bind(this);
        this.capturarEmail = this.capturarEmail.bind(this);
        this.submeterFormulario = this.submeterFormulario.bind(this);
    }

    capturarNome(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ nome: event.target.value });
    }

    capturarSobreNome(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ sobreNome: event.target.value });
    }

    capturarEmail(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ email: event.target.value });
    }

    async submeterFormulario(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const { nome, sobreNome, email } = this.state;
    
        if (!nome || !sobreNome || !email) {
            M.toast({ html: 'Por favor, preencha todos os campos!' });
            return;
        }
    
        let cliente = { nome, sobreNome, email };
    
        try {
            const response = await fetch('http://localhost:32832/cliente/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, sobreNome, email })
            });

            if (response.ok) {

            M.toast({ html: `Cliente cadastrado com sucesso! ` });
                this.setState({ nome: '', sobreNome: '', email: ''});
            } else {
                throw new Error('Erro ao cadastrar cliente!');
            }
        } catch (error) {
            M.toast({ html: error.message });
            console.error("Failed to register client:", error);
        }
    }

    componentDidMount() {
        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;


        return (
            <>
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s4">
                                <a onClick={(e) => this.props.seletorView('FormularioCadastro', e)} className="purple-text text-lighten-2">Clientes</a>
                            </li>
                            <li className="tab col s4">
                                <a onClick={(e) => this.props.seletorView('FormularioProdutos', e)} className="purple-text text-lighten-2">Produtos</a>
                            </li>
                            <li className="tab col s4">
                                <a onClick={(e) => this.props.seletorView('FormularioServicos', e)} className="purple-text text-lighten-2">Serviços</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container center-align">
                    <h5 className="purple-text">Cadastro Cliente</h5>

                    <div className="row">
                        <form className="col s12" onSubmit={this.submeterFormulario}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input onChange={this.capturarNome} value={this.state.nome} id="nome" type="text" className="validate" />
                                    <label htmlFor="nome" className={this.state.nome ? "active" : ""}>Nome</label>
                                </div>
                                <div className="input-field col s6">
                                    <input onChange={this.capturarSobreNome} value={this.state.sobreNome} id="sobreNome" type="text" className="validate" />
                                    <label htmlFor="sobreNome" className={this.state.sobreNome ? "active" : ""}>Sobrenome</label>
                                </div>
                                <div className="input-field col s6">
                                    <input onChange={this.capturarEmail} value={this.state.email} id="email" type="email" className="validate" />
                                    <label htmlFor="email" className={this.state.email ? "active" : ""}>Email</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12">
                                    <button className={estiloBotao} type="submit" name="action">Enviar
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                                <a onClick={(e) => this.props.seletorView('ExcluirCliente', e)} className="purple-text text-lighten-2">Excluir</a> <br></br>
                                <a onClick={(e) => this.props.seletorView('AtualizarCliente', e)} className="purple-text text-lighten-2">Atualizar</a>
                            </div>
                            
                        </form>
                        
                    </div>
                </div>
            </>
        );
    }
}
