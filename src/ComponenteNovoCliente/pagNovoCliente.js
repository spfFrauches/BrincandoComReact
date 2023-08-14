import React, { useState, Component } from 'react';
import apisave from './apispf';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';




export default class PagNovoCliente extends Component {

    state = {
        nome: '',
        email: '',
        telefone: '',
    };

    handleInputChangeNome = e => {
       this.setState({ nome: e.target.value })
    };

    handleInputChangeEmail = e => {
        this.setState({ email: e.target.value })
     };

     handleInputChangeTelefone = e => {
        this.setState({ telefone: e.target.value })
     };

     

    handleSubmit = async e => {

        e.preventDefault();
        console.log("Ola Reacj - enviando dados");
        console.log(this.state.nome);
        console.log(this.state.email);
        console.log(this.state.telefone);

        const response = await apisave.post('', {
            nome:this.state.nome,
            email:this.state.email,
            telefone:this.state.telefone
        }); 

        this.setState({
            nome:'',
            email:'',
            telefone:''
        });

        // Vamos melhorar esse redirecionamento
        window.location.href ='http://localhost:3000'


        
    }

    render() {

        //console.log(this.state);

        return (

            <div className="container">
        
                <div className='card p-2 mt-2 text-center'>
                    <h1>Clientes</h1>
                    <p>Novo Cliente - <span> {this.state.nome} </span></p>
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

                    <form onSubmit={this.handleSubmit} >

                    <div className="row">

                        <div className="col-md-12 mb-3">
                            <label  className="form-label">Nome</label>
                            <input  
                                onChange={this.handleInputChangeNome} 
                                value={this.state.nome}
                                type="text"
                                className="form-control"  
                                placeholder="" />
                        </div>

                        <div className="col-md-12 mb-3">
                            <label className="form-label">E-mail</label>
                            <input
                                onChange={this.handleInputChangeEmail}  
                                value={this.state.email}
                                type="email" 
                                className="form-control"  
                                placeholder="" />
                        </div>

                        <div className="col-md-12 mb-3">
                            <label className="form-label">Telefone</label>
                            <input
                                onChange={this.handleInputChangeTelefone} 
                                value={this.state.telefone}
                                type="text" 
                                className="form-control"  
                                placeholder="" />
                        </div>

                        <div className="col-md-12 mb-3">
                            <button type="submit" className="btn btn-primary">Salvar</button>
                        </div>

                        </div>

                    </form>

                    

                </div>
        
            </div>
        
          );
    }

  
}
