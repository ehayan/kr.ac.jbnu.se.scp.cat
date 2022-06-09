import React from 'react';
import SideBar from '../components/sidebar/Sidebar';

const ProjectLayout = ({ children }) => {
  return (
    <main>
      <div className='d-flex'>
        <aside className='sidebarArea sidebarShadow bg-probby-main m-r-10'>
          <SideBar />
        </aside>

        <div className='contentArea flex-fill'>
          <div className='container-fluid'>{children}</div>
        </div>
      </div>
      <style jsx>{`
        main {
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default ProjectLayout;
