import React, { Component, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apigetcliente from './apispf';


import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function PagEditCliente() {

  const { cliente } = useParams();
  const response =  apigetcliente.get(`/${cliente}`);
  
  console.log(response.data);

  useEffect(() => {
    // Fazendo uma chamada à API usando fetch
    fetch(`http://localhost/ApiSpf/public/cliente/${cliente}`)
      .then(response => response.json())
      .then(data => {
        console.log('Dados da API:', data.nome);
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

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
            <form >
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <label  className="form-label">Nome</label>
                        <input        
                            type="text"
                            className="form-control"  
                            placeholder="" />
                    </div>
                </div>
            </form>
        </div>
    </div>

  );
}

export default PagEditCliente;