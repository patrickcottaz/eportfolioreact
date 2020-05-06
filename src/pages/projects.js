import React from 'react';
import i18n from 'i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ProjectsModal } from '../components/projectsModal';

export class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <div className="projects-intro">
          <h1 id="first" className="projects-intro-headForm">
            {i18n.t('projects.title')}
          </h1>
        </div>
        <div className="projects-mainContent">
          <h2 className="projects-mainContent-content subtitle is-4">
            {i18n.t('projects.subtitle')}
          </h2>
          <h3 className="projects-mainContent-content projects-mainContent-content-extra subtitle is-5">
            <FontAwesomeIcon className="projects-mainContent-content-handPointer" icon="hand-pointer" /> {i18n.t('projects.info')}
          </h3>
          <div>
            <ProjectsModal />
          </div>
        </div>
      </div>
    )
  }
}
