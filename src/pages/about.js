import React from 'react';
import i18n from 'i18next';
import JQuery from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactComponent as SvgTest } from '../components/svgTest.svg';
import { ReactComponent as SvgMobile } from '../components/svgMobile.svg';

const $ = JQuery;

export class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.getDash = this.getDash.bind(this);
    this.backtoTop = this.backtoTop.bind(this);
    this.resumeTranslated = this.resumeTranslated.bind(this);
  }

  backtoTop() {
    window.scrollTo(0, document.getElementById('topAbout').offsetTop);
  }

  resumeTranslated() {
    window.open(`${process.env.PUBLIC_URL}/${i18n.language}_resume.pdf`);
  }

  getDash() {
    this.setState({ isClicked: true });
    this.backtoTop();

    $(document).ready(() => {
      $('.path').css('stroke-dashoffset', '1298');
      $('.path').css('stroke-dasharray', '1302.38671875');

      const dashOffset = $('.path').css('stroke-dashoffset');
      $(window).scroll(() => {
        const percentageComplete = (($(window).scrollTop() / ($('html').height() - $(window).height())) * 100);
        const newUnit = parseInt(dashOffset, 10);
        const offsetUnit = percentageComplete * (newUnit / 100);

        $('.path').css('stroke-dashoffset', newUnit - offsetUnit);
      });
    });
  }

  render() {
    return (
      <div id="topAbout" className="about">
        <div className="about-desktop">
          {!this.state.isClicked ?
            <div v-if="!isClicked" className="about-desktop-intro has-text-centered">
              <div className="about-desktop-intro-warmUp">
                <h1 id="first" className="headForm">
                  {i18n.t('about.warmup.title')}
                </h1>
                <span className="buttonstyle" onClick={this.resumeTranslated}>
                  <FontAwesomeIcon icon="coffee" /> {i18n.t('about.warmup.button')}
                </span>
              </div>
              <div className="about-desktop-intro-startingBlock">
                <h1 className="headForm">
                  {i18n.t('about.start.title')}
                </h1>
                <button className="buttonstyle" onClick={this.getDash}>
                  <FontAwesomeIcon icon="running" /> {i18n.t('about.start.button')}
                </button>
              </div>
            </div>
            :
            <div className="about-desktop-intro-mainContent about-desktop-intro has-text-centered">
              <h1 className="headForm relative">
                {i18n.t('about.scroll.title')} <FontAwesomeIcon className="about-desktop-intro-mainContent-scrollIt" icon="arrow-down" />
              <button className="buttonstyle about-desktop-intro-mainContent-back" onClick={() => {this.setState({ isClicked: false }); this.backtoTop()}}>
                  <FontAwesomeIcon icon="coffee" /> {i18n.t('about.scroll.back')}
                </button>
              </h1>
              <div id="emptySpace" className="about-desktop-intro-mainContent-emptySpace" />
              <SvgTest />
            </div>
        }
        </div>
        <div className="about-mobile">
          <h1 className="headForm">
            {i18n.t('about.scroll.mobileTitle')} <FontAwesomeIcon icon="arrow-down" />
          </h1>
          <SvgMobile className="about-mobile-svgMobile" />
          <div className="about-mobile-mobileCv">
            <span className="buttonstyle" onClick={this.resumeTranslated}>
              <FontAwesomeIcon icon="coffee" /> {i18n.t('about.warmup.button')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
