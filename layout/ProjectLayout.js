import React from 'react';
import { Container } from 'reactstrap';
import SideBar from '../components/sidebar/Sidebar';
import Project_header from './header/Project-header';

const ProjectLayout = ({ children }) => {
  return (
    <main>
      <div className='pageWrapper d-flex'>
        <aside className='sidebarArea bg-lightblue'>
          <SideBar />
        </aside>

        <div className='contentArea flex-fill'>
          <Project_header />
          <div className='container-fluid'>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default ProjectLayout;
