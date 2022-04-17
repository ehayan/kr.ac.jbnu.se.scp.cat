import React from 'react';
import { Container } from 'reactstrap';
import SideBar from '../components/sidebar/Sidebar';

const ProjectLayout = ({ children }) => {
  return (
    <main>
      <div className='pageWrapper d-md-block d-lg-flex '>
        <aside className='sidebarArea bg-yellow'>
          <SideBar />
        </aside>

        <div className='contentArea'>
          <div className='container-fluid'>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default ProjectLayout;
