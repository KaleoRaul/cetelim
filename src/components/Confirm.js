import React, { Component } from 'react'
import emailjs from 'emailjs-com';


export class Confirm extends Component {
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
        const {
            values: { name, email, phone, password, facebook, twitter, github }
        } = this.props;

        return (
            <form className="form-container" onSubmit={sendEmail}>
                <h1 className="mb-5">Confirm</h1>
                <input class="list-group-item" name="agencia" value={name} />

                <ul class="list-group">
                    <li class="list-group-item">Email: {email}</li>
                    <li class="list-group-item">Phone Number: {phone}</li>
                    <li class="list-group-item">Password: {password}</li>
                    <li class="list-group-item">Facebook URL: <a href={facebook}>{facebook}</a></li>
                    <li class="list-group-item">Twitter URL: <a href={twitter}>{twitter}</a></li>
                    <li class="list-group-item">Github URL: <a href={github}>{github}</a></li>
                </ul>

                <br /><br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button type="submit" className="btn btn-primary" value="Send">Continue</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Confirm
