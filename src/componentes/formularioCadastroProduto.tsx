import { Component } from "react";
import M from "materialize-css"; 


type props = {
    tema: string

}

export default class FormularioCadastroProduto extends Component<props> {

    componentDidMount() {
        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`

        return (
            <>
            <div className="row">
                <div className="center-align">
                    <a className="waves-effect purple lighten-3 btn"><i className="material-icons left">account_circle</i>Cliente</a>
                    <a className="waves-effect purple lighten-3 btn"><i className="material-icons left">favorite</i>Produtos</a>
                    <a className="waves-effect purple lighten-3 btn"><i className="material-icons left">filter_vintage</i>Serviços</a>
                </div>  
            </div>

            <div className="container center-align">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="social_name" type="text" className="validate" />
                            <label htmlFor="social_name">Valor</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="social_name" type="text" className="validate" />
                            <label htmlFor="social_name">Quantidade</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Enviar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
        )
    }
}