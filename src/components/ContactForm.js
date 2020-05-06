import React from 'react';
import i18n from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const axios = require('axios');

export class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFormSubmitted: false,
      username: '',
      email: '',
      message: '',
      errors: [],
    };
    this.checkForm = this.checkForm.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.backtoTop = this.backtoTop.bind(this);
    this.computeErrorMessage = this.computeErrorMessage.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleMail = this.handleMail.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  async checkForm(e) {
    this.setState({ errors: [] });
    const errorsArray = [];
    if (this.state.username === '') {
      this.backtoTop();
      errorsArray.push(i18n.t('contact.form.errors.name'));
    }
    if (this.state.email === '') {
      this.backtoTop();
      errorsArray.push(i18n.t('contact.form.errors.email'));
    } else if (!this.validEmail(this.state.email)) {
      this.backtoTop();
      errorsArray.push(i18n.t('contact.form.errors.emailValid'));
    }
    if (this.state.message === '') {
      this.backtoTop();
      errorsArray.push(i18n.t('contact.form.errors.message'));
    }
    if (!errorsArray.length) {
      const user = { username: this.state.username, email: this.state.email, message: this.state.message };
      await axios.post('https://mywebsitedtb.firebaseio.com/data.json', user)
        .then((response) => {
          this.setState({ isFormSubmitted: true });
          this.backtoTop();
        }, (error) => {
          return error;
        });
      return true;
    }
    this.setState({ errors: errorsArray });
  }

  handleName(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleMail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleText(e) {
    this.setState({
      message: e.target.value
    });
  }

  validEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  backtoTop() {
    window.scrollTo(0, document.getElementById('top').offsetTop);
  }

  computeErrorMessage() {
    return i18n.t('contact.form.errors.title').replace('$', this.state.errors.length);
  }

  render() {
    return (
      <div id="top" className="form">
        {
          !this.state.isFormSubmitted ?
          <div v-if="!isFormSubmitted" className="form-formDiv">
            <h1 className="form-formDiv-headForm">
              {i18n.t('contact.form.title')}
            </h1>
            <form>
              {
                this.state.errors.length !== 0 &&
                <div variant="danger" className="form-formDiv-errorDiv notification is-danger">
                  <h3><b>{this.computeErrorMessage()}</b></h3>
                  <ul>
                    {
                      this.state.errors.map((error, index) => (
                        <li key={index}>
                          <h5><font-awesome-icon className="arrowIcon" icon="arrow-right" /> {error}</h5>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              }
              <label>
                {i18n.t('contact.form.labels.name')} <b>*</b>
              <input value={this.state.username} onChange={this.handleName} type="text" name="firstName" placeholder={i18n.t('contact.form.placeholders.name')} />
              </label>
              <label>
                {i18n.t('contact.form.labels.email')} <b>*</b>
              <input value={this.state.email} type="email" onChange={this.handleMail} name="email" placeholder={i18n.t('contact.form.placeholders.email')} />
              </label>
              <label>
                {i18n.t('contact.form.labels.message')} <b>*</b>
              <textarea value={this.state.message} onChange={this.handleText} placeholder={i18n.t('contact.form.placeholders.message')} />
              </label>
              <button className="buttonstyle" type="button" onClick={() => { this.checkForm()}}>
                <FontAwesomeIcon icon="paper-plane" /> {i18n.t('contact.form.submit')}
              </button>
            </form>
          </div>
          :
          <div>
            <h1 className="form-formDiv-headForm" style={{paddingBottom: '6%'}}>
              {i18n.t('contact.form.success')} <FontAwesomeIcon icon="thumbs-up" />
            </h1>
          </div>
        }
      </div>
    )
  }
}
