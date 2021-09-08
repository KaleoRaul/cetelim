import React, { Component } from 'react'
import logo from './logo.jpeg'



export class AccountSetup extends Component {
    
    continue = e => {
        e.preventDefault();
        
        this.props.nextStep();
    };
    

    render() {
        
        const { values, inputChange } = this.props;
        const msg = {
            color: "red",
            padding: "10px",
            fontFamily: "Arial"
          };
     
        return (
            <>
            <div  className="logo_container ">

            <img className="logo" src={logo} width="250"/>
            </div>
            <div className="form-container">
            
                <h6 className="mb-7"><b>Seja Bem-vindo!</b><br></br> para realizar seu acesso informe abaixo os dados cadastrais </h6>
                <p style={msg}> {values.msg}</p>
                <div className="form-group">
                    
                    <input type="number" placeholder="Digite seu CPF" className="form-control" name="cp" onChange={inputChange('cp')} value={values.cp}  required id="cpf"  />
                </div>


                <div className="form-group">
                    <input placeholder="Celular com DDD"  type="number" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
                </div>
                <div className="form-group">
                    <input placeholder="Senha Aplicativo"  type="password" className="form-control" name="passapp" onChange={inputChange('passapp')} value={values.passapp} />
                </div>

                <br />
                

                <div className=" col-lg-12 text-right">
                    
                    <button className="btn btn-primary " onClick={this.continue}>CONTINUAR</button>
                </div>
            </div>
            </>
                    )
        
    }
    
}

export default AccountSetup
