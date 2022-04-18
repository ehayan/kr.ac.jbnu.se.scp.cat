import React from 'react';
import { Container } from 'reactstrap';
import SideBar from '../components/sidebar/Sidebar';

const ProjectLayout = ({ children }) => {
  return (
    <main>
      <div className='pageWrapper d-flex'>
        <aside className='sidebarArea bg-lightblue'>
          <SideBar />
        </aside>

        <div className='contentArea flex-fill'>
          <div className='container-fluid'>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default ProjectLayout;
