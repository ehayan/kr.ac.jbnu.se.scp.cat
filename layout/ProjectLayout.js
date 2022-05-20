import React from 'react';

import SideBar from '../components/sidebar/Sidebar';

const ProjectLayout = ({ children }) => {
  return (
    <main>
      <div className='d-flex'>
        <aside className='sidebarArea bg-probby-main'>
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
