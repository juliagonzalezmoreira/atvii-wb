import { Component, MouseEvent, useEffect } from "react";
import M from "materialize-css"; 

    type Props = {
        tema: string;
        seletorView: (view: string, e: React.MouseEvent<HTMLAnchorElement>) => void;
      };
      
      const FormularioCadastroCliente: React.FC<Props> = ({ tema, seletorView }) => {
        let estilo = `collection-item active ${tema}`;

        useEffect(() => {
            const elems = document.querySelectorAll('select');
            M.FormSelect.init(elems);
            return () => {
            };
        }, []); 
      
        return (
            <>
                <div className="row">
                    <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s4"><a onClick={(e) => seletorView('FormularioCadastro', e)} className="purple-text text-lighten-2">Clientes</a></li>
                        <li className="tab col s4"><a onClick={(e) => seletorView('FormularioProdutos', e)} className="purple-text text-lighten-2">Produtos</a></li>
                        <li className="tab col s4"><a onClick={(e) => seletorView('FormularioServicos', e)} className="purple-text text-lighten-2">Serviços</a></li>
                    </ul>
                    </div>
                </div>

            <div className="container center-align">
            <h5 className="purple-text">Cadastro Cliente</h5>

            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="social_name" type="text" className="validate" />
                            <label htmlFor="social_name">Nome Social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <select id="genero" name="genero" >
                                <option value="" disabled selected>Escolha uma opção:</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outros">Outros</option>
                            </select>
                            <label htmlFor="genero">Gênero</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="cpf" type="text" className="validate" />
                            <label htmlFor="cpf">CPF</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="btn waves-effect purple ligthen-3" type="submit" name="action">Enviar
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

export default FormularioCadastroCliente