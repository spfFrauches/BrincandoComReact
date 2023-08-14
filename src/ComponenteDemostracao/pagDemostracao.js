import React, { Component } from 'react';
import apispf from './apispf';
import {  Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default class PagDemostracao extends Component {

    state = {
        clientes: [],
        nodata: '',
        loading: true,
    };

    fetchClientes = async () => {

        const response = await apispf.get(''); 
        console.log(response.data);
        this.setState({ clientes: response.data });
        this.setState({ loading: false });

        if (response.data.status === 'none') {
            this.setState({ nodata: 'none' });
        }


    }

    componentDidMount() {

        this.fetchClientes();
        console.log(this.state.clientes);

    };

    render() {

        const { clientes, loading } = this.state;

        return (

            <>
            <div className="container">
        
                <div className='card p-2 mt-2 text-center'>
                    <h1>Clientes</h1>
                    <p>Brincando em React JS</p>
                </div>
        
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex gap-2 justify-content-center py-5">          
                            <a href='/novo-cliente' className="badge text-bg-success rounded-pill">Novo Cliente</a>

                        </div>
                    </div>
                </div>
        
                <div className="row">

                    {loading ? (
                        <p className="text-muted mt-5 text-center">Carregando clientes ...</p>
                        
                    ) : (

                        
                    <ol className="list-group list-group-flush">

                        {clientes.map(cliente => (
                            <li className="list-group-item d-flex justify-content-between align-items-start"
                                    key={cliente.codcliente}>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{cliente.nome}</div>
                                </div>
                                <span className="badge bg-primary rounded-pill text-white">
                                    <Link className="link" to={`/cliente/${cliente.codcliente}`} >
                                        Detalhes 
                                    </Link>
                                </span>
                            </li>
                        ))}       
                    
                    </ol>

                    ) }

                </div>
        
            </div>
            </>
        
          );
    }

  
}
