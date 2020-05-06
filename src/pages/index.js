import React from 'react';
import i18n from "i18next";

import { Button } from '../components/buttonCta';
import { Sticky } from '../components/sticky';
import { IndexParticles } from '../components/particles';

export class Index extends React.Component {
  render() {
    return (
      <div className="home">
        <Sticky text={i18n.t('index.sticky')} />
        <div className="container is-fluid home-first">
          <div className="columns">
            <div className="column is-offset-2 is-5">
              <div className="home-first-content">
                <h1 className="title is-2">
                  {i18n.t('index.firstDiv.title')}
                </h1>
                <h2 className="title is-4">
                  {i18n.t('index.firstDiv.subtitle')}
                </h2>
                <br />
                <h4 className="subtitle is-5">
                  {i18n.t('index.firstDiv.paragraph1')}
                </h4>
                <h4 className="subtitle is-5">
                  {i18n.t('index.firstDiv.paragraph2')}
                </h4>
              </div>
              <Button
                text={i18n.t('index.firstDiv.buttonText')}
                link="/about"
              />
            </div>
            <div className="column is-relative has-text-centered">
              <img className="home-asset home-first-asset" src={require('../assets/svg/startingblock-logo.svg')} alt="" />
            </div>
          </div>
        </div>
        <div className="container is-fluid home-second">
          <IndexParticles />
          <div className="columns">
            <div className="column is-offset-2 is-5">
              <div className="home-first-content">
                <h1 className="title is-2">
                  {i18n.t('index.secondDiv.title')}
                </h1>
                <br />
                <h4 className="subtitle is-5">
                  {i18n.t('index.secondDiv.desc1')}
                </h4>
                <h4 className="subtitle is-5">
                  {i18n.t('index.secondDiv.desc2')}
                </h4>
              </div>
              <Button
                text={i18n.t('index.secondDiv.buttonText')}
                link="/projects"
              />
            </div>
            <div className="column is-relative has-text-centered">
              <img className="home-asset home-second-asset" src={require('../assets/svg/perfectionnement.svg')} alt="" />
            </div>
          </div>
        </div>
        <div className="container is-fluid home-third">
          <div className="columns">
            <div className="column is-5 has-text-centered">
              <img className="home-asset home-third-asset" src={require('../assets/svg/apprentissage.svg')} alt="" />
            </div>
            <div className="column is-6">
              <div className="home-first-content">
                <h1 className="title is-2">
                  {i18n.t('index.thirdDiv.title')}
                </h1>
                <br />
                <h4 className="subtitle is-5">
                  {i18n.t('index.thirdDiv.desc1')}
                </h4>
                <h4 className="subtitle is-5">
                  {i18n.t('index.thirdDiv.desc2')}
                </h4>
                <h4 className="subtitle is-5">
                  {i18n.t('index.thirdDiv.desc3')}
                </h4>
              </div>
              <Button
                text={i18n.t('index.thirdDiv.buttonText')}
                link="/technos"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
