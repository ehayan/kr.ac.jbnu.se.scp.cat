import { Badge, Button } from "reactstrap";
import { Accordion } from "react-bootstrap";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const ProjectList = ({ router, session, projects }) => {
  const enterClick = (e) => {
    router.push({pathname: "/project-dashboard",
     query: {
        projectId : e.target.id
    }
    })
  }
  const deleteClick = async (e) => {
    const projectId = e.target.id;
    await fetch('/api/addproject',({
      method:'DELETE',
      body: projectId,
    }))
    window.location.reload();
  }
  return (
    <div>
      <Accordion>
        {
          projects.map((project, i) => (
            <Accordion.Item eventKey={i}>
              <Accordion.Header>
                <div>
                  {project.title}
                  <Badge className="m-l-10" pill color="primary">
                    {project.createdAt}
                  </Badge>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <p>Member : {project.users.user.name}</p>
                <p>Registered Tools : </p>
                <Button
                  id={project._id}
                  color="primary"
                  className="m-r-10  m-t-10"
                  onClick={enterClick}
                >
                  Enter
                </Button>
                <Button id={project._id} onClick={deleteClick} color="danger" className="m-t-10 ">
                  Delete
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          ))
        }
      </Accordion>


      <style jsx>{`
        p {
          font-family: "Spoca_R";
        }

        div {
          font-family: "Spoca_B";
        }
      `}</style>
    </div>

  );
};

export default ProjectList;    