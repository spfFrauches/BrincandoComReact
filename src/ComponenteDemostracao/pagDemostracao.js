import React, { Component } from 'react';
import apispf from './apispf';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default class PagDemostracao extends Component {

    state = {
        clientes: [],
    };

    fetchClientes = async () => {

        const response = await apispf.get(''); 
        console.log(response.data);
        this.setState({ clientes: response.data });

    }

    componentDidMount() {

        this.fetchClientes();
        console.log(this.state.clientes);

    };

    render() {

        const { clientes } = this.state;

        return (

            <div className="container">
        
                <div className='card p-2 mt-2 text-center'>
                    <h1>Clientes</h1>
                    <p>Brincando em React JS</p>
                </div>
        
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex gap-2 justify-content-center py-5">
                            <a className="badge text-bg-primary rounded-pill"> Atualizar </a>                
                            <a className="badge text-bg-success rounded-pill">Novo Cliente</a>
                            <a className="badge text-bg-danger rounded-pill">Ajuda</a>
                            <a className="badge text-bg-secondary rounded-pill">Informações Adicionais</a>
                            <a className="badge text-bg-info rounded-pill">Configurações</a>
                            <a className="badge text-bg-dark rounded-pill">Sair</a>
                        </div>
                    </div>
                </div>
        
                <div className="row">
                    <ol className="list-group list-group-flush">

                        {clientes.map(cliente => (
                            <li className="list-group-item d-flex justify-content-between align-items-start"
                                    key={cliente.codcliente}>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{cliente.nome}</div>
                                </div>
                                <span className="badge bg-primary rounded-pill">Detalhes</span>
                            </li>
                        ))}       
                      
                    </ol>
                </div>
        
            </div>
        
          );
    }

  
}
