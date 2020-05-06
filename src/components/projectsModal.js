import React from 'react';
import i18n from 'i18next';

export class ProjectsModal extends React.Component {

  constructor(props) {
    super(props);
    const projects = i18n.t('projects.all', { returnObjects: true });
    this.state = {
      focusedProject: {
        title: projects[0].title,
        caption: projects[0].caption,
        thumbnail: projects[0].thumbnail,
        link: projects[0].link,
      }
    };
    this.desktopRef = React.createRef();
    this.mobileRef = React.createRef();
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav(project) {
    this.desktopRef.current.style.width = '100%';
    this.mobileRef.current.style.width = '100%';
    this.setState({
      focusedProject: {
        title: project.title,
        caption: project.caption,
        thumbnail: project.thumbnail,
        link: project.link,
      }
    });
  }

  closeNav() {
    this.desktopRef.current.style.width = '0%';
    this.mobileRef.current.style.width = '0%';
  }

  render() {
    return (
      <div className="projectsModal">
        <div className="projectsModal-blocks columns is-multiline">
          {
            i18n.t('projects.all', { returnObjects: true }).map((project, index) =>
            <div
              className="column is-4"
              key={index}
            >
              <img
                className="projectsModal-blocks-thumbProject"
                src={project.thumbnail}
                alt=""
                onClick={() => {this.openNav(project)}}
              />
            </div>
          )}
        </div>
        <div ref={this.desktopRef} className="projectsModal-overlay projectCarac is-hidden-mobile" onClick={this.closeNav}>
          <h2 className="projectsModal-overlay-title title is-2">
            {this.state.focusedProject.title}
          </h2>
          {
            this.state.focusedProject.link !== "" ?
            <a href={this.state.focusedProject.link} target="_blank" rel="noopener noreferrer" className="projectsModal-overlay-link">
              <img className="projectsModal-overlay-projectImg" src={this.state.focusedProject.thumbnail} alt="" />
            </a>
            :
            <img className="projectsModal-overlay-projectImg" src={this.state.focusedProject.thumbnail} alt="" />
          }
          <div className="projectsModal-overlay-caption subtitle is-5">
            <p>{this.state.focusedProject.caption}</p>
          </div>
        </div>
        <div ref={this.mobileRef} className="projectsModal-overlay projectCarac is-hidden-desktop">
          <span className="projectsModal-overlay-closebtn is-hidden-desktop" onClick={this.closeNav}>&times;</span>
          <h2 className="projectsModal-overlay-title title is-2">
            {this.state.focusedProject.title}
          </h2>
          {
            this.state.focusedProject.link !== "" ?
            <a target="_blank" rel="noopener noreferrer" href={this.state.focusedProject.link}>
              <img className="projectsModal-overlay-projectImg" src={this.state.focusedProject.thumbnail} alt="" />
            </a>
            :
            <img className="projectsModal-overlay-projectImg" src={this.state.focusedProject.thumbnail} alt="" />
          }
          <div className="projectsModal-overlay-caption subtitle is-5">
            <p>{this.state.focusedProject.caption}</p>
          </div>
        </div>
      </div>
    )
  }
}
