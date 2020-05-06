import React from 'react';

export class Flag extends React.Component {
  render() {
    return (
      <span className={'flag-icon flag-icon-' + this.props.iso} title={this.props.title || this.props.iso} />
    )
  }
}
