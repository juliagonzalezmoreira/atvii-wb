import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Cadastro'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-2" botoes={['Cadastro', 'Clientes', 'Produtos', 'Serviços']} />
        
        if (this.state.tela === 'Cadastro') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-2" seletorView={this.selecionarView}  />
                </>
            )
            
        } if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-2"  seletorView={this.selecionarView}/>
                </>
            )
            
        } if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="purple lighten-2" seletorView={this.selecionarView}/>
                </>
            )
        }  if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema=" purple lighten-2" seletorView={this.selecionarView}/>
                </>
            )
        }  if (this.state.tela === 'FormularioProdutos') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema=" purple lighten-2"  seletorView={this.selecionarView} />
                </>
            )
        }  if (this.state.tela === 'FormularioServicos') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema=" purple lighten-2"  seletorView={this.selecionarView}/>
                </>
            )
        } else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema=" purple lighten-2" seletorView={this.selecionarView}/>
                </>
            )
        }

    }
}