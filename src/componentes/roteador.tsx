import { Component, useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaGenero from "./listaGenero";
import ListaMaiorConsumo from "./listaMaiorConsumo";
import ListaMaiorConsumoProd from "./listaMaiorConsumoProd";
import ListaMaiorConsumoServ from "./listaMaiorConsumoServ";
import ListaMenorConsumoProd from "./listaMenorConsumoProd";
import ListaMenorConsumoServ from "./listaMenorConsumoServ";
import ListaProdMaisConsumidos from "./listaProdMaisConsumidos";
import ListaProdMaisConsumidosGenero from "./listaProdMaisConsumidosGenero";
import ListaServMaisConsumidos from "./listaServMaisConsumidos";
import ListaServMaisConsumidosGenero from "./listaServMaisConsumidosGenero";


export default function Roteador() {

    const [tela, setTela] = useState('Cadastro')

    const selecionarView = (novaTela: string, evento: React.MouseEvent) => {
        evento.preventDefault();
        console.log(novaTela);
        setTela(novaTela);
      };
    
      let barraNavegacao = (
        <BarraNavegacao
          seletorView={selecionarView}
          tema="purple lighten-2"
          botoes={['Cadastro', 'Clientes', 'Produtos', 'Serviços']}
        />
      );

    const construirView = () => {
        
        if (tela === 'Cadastro') {
            return (
                <>
                     {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-2" seletorView={selecionarView}/>
                </>
            )
            
        } if (tela === 'Clientes') {
            return (
                <>
                     {barraNavegacao}
                    <ListaCliente tema="purple lighten-2" seletorView={selecionarView}/>
                </>
            )
        } if (tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="purple lighten-2" seletorView={selecionarView}/>
                </>
            )
        }  if (tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema=" purple lighten-2" seletorView={selecionarView}/>
                </>
            )
        }  if (tela === 'FormularioProdutos') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema=" purple lighten-2"  seletorView={selecionarView} />
                </>
            )
        }  if (tela === 'FormularioServicos') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema=" purple lighten-2"  seletorView={selecionarView}/>
                </>
            )
        } if (tela === 'PorGenero') {
            return (
                <>
                    {barraNavegacao}
                    <ListaGenero tema=" purple lighten-2"  seletorView={selecionarView}/>
                </>
            )
        } if (tela === 'MaiorConsumo') {
            return (
                <>
                    {barraNavegacao}
                    <ListaMaiorConsumo tema=" purple lighten-2" seletorView={selecionarView}/>
                </>
            )
        } if (tela === 'MaiorConsumoProd') {
            return (
                <>
                    {barraNavegacao}
                    <ListaMaiorConsumoProd tema=" purple lighten-2"  seletorView={selecionarView}/>
                </>
            )
        } if (tela === 'MaiorConsumoServ') {
            return (
                <>
                    {barraNavegacao}
                    <ListaMaiorConsumoServ tema=" purple lighten-2"  seletorView={selecionarView}/>
                </>
            )
        } if (tela === 'MenorConsumoProd') {
            return (
                <>
                    {barraNavegacao}
                    <ListaMenorConsumoProd tema=" purple lighten-2"  seletorView={selecionarView}/>
                </>
            )
        }if (tela === 'MenorConsumoServ') {
            return (
                <>
                    {barraNavegacao}
                    <ListaMenorConsumoServ tema=" purple lighten-2"  seletorView={selecionarView}/>
                </>
            )
        } if (tela === 'ProdMaisConsumidos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdMaisConsumidos tema=" purple lighten-2"  seletorView={selecionarView}/>
                </>
            )
        } if (tela === 'ProdMaisConsumidosGenero') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdMaisConsumidosGenero tema=" purple lighten-2"  seletorView={selecionarView}/>
                </>
            )
        } if (tela === 'ServMaisConsumidos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServMaisConsumidos tema=" purple lighten-2"  seletorView={selecionarView}/>
                </>
            )
        } if (tela === 'ServMaisConsumidosGenero') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServMaisConsumidosGenero tema=" purple lighten-2"  seletorView={selecionarView}/>
                </>
            )  
        } else {
            return (
                <>
                     {barraNavegacao}
                    <FormularioCadastroCliente tema=" purple lighten-2" seletorView={selecionarView}/>
                </>
            )
        }
    }
    return (
        construirView()
    )
}

 /*  */