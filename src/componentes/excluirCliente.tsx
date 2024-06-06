import React, { Component, ChangeEvent, FormEvent } from "react";
import M from "materialize-css"; 
import { excluirCliente } from "./enuns/uri";

type Props = {
    tema: string;
    seletorView: Function;
};

type State = {
    id: string;
};

export default class ExcluirCliente extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: ''
        };

        this.capturarId = this.capturarId.bind(this);
        this.submeterFormulario = this.submeterFormulario.bind(this);
    }

    capturarId(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ id: event.target.value });
    }

    async submeterFormulario(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const { id } = this.state;
        try {
            const response = await fetch('http://localhost:32832/cliente/excluir', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            });

            if (response.ok) {
                M.toast({ html: 'Cliente excluído com sucesso!' });
                this.setState({ id: '' });
            } else {
                throw new Error('Erro ao excluir cliente!');
            }
        } catch (error) {
            M.toast({ html: error.message });
            console.error("Failed to delete client:", error);
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
                    <h5 className="purple-text">Excluir Cliente</h5>

                    <div className="row">
                        <form className="col s12" onSubmit={this.submeterFormulario}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input onChange={this.capturarId} value={this.state.id} id="id" type="text" className="validate" />
                                    <label htmlFor="id" className={this.state.id ? "active" : ""}>ID do Cliente</label>
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
