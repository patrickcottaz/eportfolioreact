import React from 'react';
import i18n from 'i18next';

import { CarouselTechnos } from '../components/CarouselTechnos';
import { ChartTechnos } from '../components/chartTechnos';

export class Technos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.onClickChangeContent = this.onClickChangeContent.bind(this);
  }

  onClickChangeContent(index) {
    this.setState({
      content: i18n.t('technos.topic.contents', { returnObjects: true })[index].content
    });
  }

  render() {
    return (
      <div className="technos">
        <div className="technos-allSkills has-text-centered">
          <h1 className="technos-headForm">
            {i18n.t('technos.carousel.title')}
          </h1>
          <h5 className="subtitle is-4">
            {i18n.t('technos.carousel.subtitle')}
          </h5>
          <div>
            <CarouselTechnos slides={i18n.t('technos.carousel.slides', { returnObjects: true })} />
          </div>
        </div>
        <div className="technos-chartsSkills has-text-centered">
          <h1 className="technos-headForm">
            {i18n.t('technos.chart.title')}
          </h1>
          <div className="technos-chartsSkills-chartTechnos">
            <ChartTechnos items={i18n.t('technos.chart.items', { returnObjects: true })} />
          </div>
        </div>
        <div className="technos-technosTopics has-text-centered">
          <h1 id="topicTitle" className="technos-headForm">
            {i18n.t('technos.topic.title')}
          </h1>
          <div className="technos-technosTopic-twoDivs">
            <div className="container is-fluid">
              <div className="columns">
                <div className="column is-12">
                  <div className="container">
                    <ul className="technos-technosTopic-twoDivs-topicList columns">
                      {
                        i18n.t('technos.topic.contents', { returnObjects: true }).map((image, index) =>
                        <li key={index} className="language column" onClick={() => {this.onClickChangeContent(index)}}>
                          <img src={image.image} alt="" />
                        </li>
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="columns">
                <div className="column is-12 technos-technosTopic-twoDivs-topicBox">
                  {
                    this.state.content === '' ?
                    <div className="subtitle is-5">
                      <p>{i18n.t('technos.topic.default')}</p>
                    </div>
                    :
                    <div className="subtitle is-5">
                      <p>{this.state.content}</p>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
