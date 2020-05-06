import React from 'react';
import i18n from 'i18next';

import { ContactForm } from '../components/ContactForm';

export class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <ContactForm />
        <div className="container contact-icons has-text-centered">
          <div className="columns">
            {
              i18n.t('contact.icons', { returnObjects: true }).map((icon, index) =>
                <div key={index} className="column is-4">
                  <a className="contact-icons-icon" href={icon.link} target={icon.targetblank ? '_blank' : '_self'}>
                    <img src={icon.image} alt="" />
                  </a>
                </div>
              )
            }
          </div>
        </div>
        <div className="contact-maps">
          <h1 className="contact-headForm">
            {i18n.t('contact.maps.title')}
          </h1>
          <iframe title="mapsContact" src={i18n.t('contact.maps.iframe')} width="800" height="600" frameBorder="0" />
        </div>
      </div>
    )
  }
}
