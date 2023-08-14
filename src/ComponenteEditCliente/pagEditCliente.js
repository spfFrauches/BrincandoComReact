import React, { Component, useEffect,  useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import apidelete from './apidelete';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


function PagEditCliente() {

    const { cliente } = useParams();
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();
    const [codcliente, setCodCliente] = useState();


    useEffect(() => {
    
        fetch(`https://saulofrauches.com.br/apispf/public/cliente/${cliente}`).then(response => response.json()).then(data => {
            console.log('Dados da API:', data.nome);
            setNome(data.nome);
            setEmail(data.email);
            setTelefone(data.telefone);
            setCodCliente(data.codigo);
        }).catch(error => {
            console.error('Erro ao buscar dados da API:', error);
        });
    }, []);

    const handleSubmit = async (event) => {

        event.preventDefault();
        
        console.log('Dados submetidos:', { nome, email, telefone, codcliente });

        const response = await apidelete.post('', {
            codcliente:codcliente,
        }); 

        // Vamos melhorar esse redirecionamento
        window.location.href ='http://localhost:3000'

    };

    const handleSubmitUpdate = async (event) => {

        event.preventDefault();
        
        console.log('Dados submetidos para update:', { nome, email, telefone, codcliente });

      

    };

    

  
    return (
    
    <div className="container">    
        <div className='card p-2 mt-2 text-center'>
            <h1>Clientes</h1>
            <p>Novo Cliente</p>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="d-flex gap-2 justify-content-center py-5">
                    <a href='/' className="badge text-bg-primary rounded-pill" 
                    > Voltar 
                    </a>                
                </div>
            </div>
        </div>
        <div className="card p-2">
            <form  >
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label  className="form-label">Cód</label>
                        <input  
                           value={codcliente}
                            type="text"
                            className="form-control"  
                            placeholder="Carregando..." />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label  className="form-label">Nome</label>
                        <input  
                           value={nome}
                            type="text"
                            className="form-control"  
                            placeholder="Carregando..." />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label  className="form-label">Email</label>
                        <input  
                           value={email}
                            type="text"
                            className="form-control"  
                            placeholder="Carregando..." />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label  className="form-label">Email</label>
                        <input  
                           value={telefone}
                            type="text"
                            className="form-control"  
                            placeholder="Carregando..." />
                    </div>

                    <div className="col-md-12 mb-3">

                        <button type="submit" onClick={handleSubmit} className="btn btn-danger">Excluir</button>
                        &nbsp;
                        <button type="submit" onClick={handleSubmitUpdate} className="btn btn-primary">Salvar</button>
                    
                    </div>

                </div>
            </form>
        </div>
    </div>

  );
}

export default PagEditCliente;
