import React from 'react';
import { Link } from "react-router-dom";
import i18n from "i18next";

export class Header extends React.Component {

  constructor(props) {
    super(props);
    this.resetBurger = this.resetBurger.bind(this);
    this.toggleBurger = this.toggleBurger.bind(this);
  }

  resetBurger() {
    document.querySelector('.navbar-menu').classList.remove('is-active');
    document.querySelector('.navbar-burger').classList.remove('is-active');
  }

  toggleBurger() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
    document.querySelector('.navbar-burger').classList.toggle('is-active');
  }

  render() {
    const links = i18n.t('header.links', { returnObjects: true });
    return (
        <header>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <div className="navbar-brand-logo" onClick={this.resetBurger}>
                <Link to="/" className="navbar-item navbar-item-logo">
                  <img src={require('../assets/svg/logo.svg')} alt="" />
                </Link>
              </div>
              <span
                id="menu-burger"
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbar"
                onClick={this.toggleBurger}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </span>
            </div>
            <div id="navbar" className="navbar-menu">
              <div className="navbar-end has-text-centered" onClick={this.resetBurger}>
                {links.map((link, index) => (
                  <Link key={index} to={link.route} className="navbar-item navbar-item-focus" active-class="navbar-item-activestyle">
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </header>
    )
  }
}
