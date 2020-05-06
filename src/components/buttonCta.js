import React from 'react';
import { Link } from 'react-router-dom';

export class Button extends React.Component {
  render() {
    return (
      <div>
        <Link className="buttonstyle" to={this.props.link} tag="button">
          {this.props.text}
        </Link>
      </div>
    )
  }
}
