import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Sticky extends React.Component {
  render() {
    return (
      <Link className="stickyContact" to="/contact" tag="button">
        <FontAwesomeIcon icon="hand-peace" /> {this.props.text}
      </Link>
    )
  }
}
