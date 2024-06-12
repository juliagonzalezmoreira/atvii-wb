import { Component, useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';

type Cliente = {
    id: number;
    nome: string;
    sobreNome: string;
    email: string;
    
}

type props = {
    tema: string
    seletorView: Function
}

export default function ListaCliente(props: props) {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
        fetch('http://localhost:32832/clientes')
            .then(response => response.json())
            .then(data => setClientes(data))
            .catch(error => console.error('Erro ao obter clientes:', error));
    }, []);

    let estilo = `collection-item active ${props.tema}`;

    return (
        <>
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
                        {clientes.map((cliente, index) => (
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
        </>
    )
}
