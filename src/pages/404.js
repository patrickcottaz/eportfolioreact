import React from 'react';
import i18n from 'i18next';

import { Button } from '../components/buttonCta';

export class NotFound extends React.Component {
  render() {
    return (
      <div className="notfound container">
        <div className="notfound-intro">
          <h1 className="notfound-intro-headForm">
            {i18n.t('notfound.title')}
          </h1>
          <img className="notfound-intro-icon" src={require('../assets/svg/error404.svg')} alt="" />
          <Button
            text={i18n.t('notfound.button')}
            link="/"
          />
        </div>
      </div>
    )
  }
}
