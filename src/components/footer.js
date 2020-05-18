import React from 'react';
import i18n from "i18next";

import { Flag } from './flag';
import * as actionCreators from '../store/actions/index';
import { connect } from 'react-redux';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer container is-fluid">
        <div className="columns">
          <div id="switcher" className="column is-2 has-text-centered">
            <span onClick={() => {this.props.setOpenLocale(true)}}>
              <div className="footer-switcher-flag">
                <Flag iso={i18n.t('footer.isoFlag')} />
              </div>
              {i18n.t('footer.currentLocale')}
            </span>
          </div>
          <div className="column footer-markdown">
            <div className="title is-4" dangerouslySetInnerHTML={{__html: i18n.t('footer.markdown')}} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    openLocale: state.modale.openLocale
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setOpenLocale: (value) => dispatch(actionCreators.setOpenLocale(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
