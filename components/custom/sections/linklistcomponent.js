import React, { useRef, useEffect, useState } from "react";
import { db } from "../../../pages/firebase";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
} from "reactstrap";

import {
  FaGithub,
  FaGoogleDrive,
  FaTrello,
  FaSlack,
  FaDiaspora,
} from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

const List = ({ projectId }) => {
  const [dbIsEmpty, setDbIsEmpty] = useState(true);
  const [githubLink, setGithubLinks] = useState("");
  const [googleDriveLink, setGoogleDriveLinks] = useState("");
  const [trelloLink, setTrelloLinks] = useState("");
  const [slackLink, setSlackLinks] = useState("");
  const [etcLinks, setEtcLinks] = useState([]);
  //const linkData = db.collection('registered_link');
  const linkId = useRef(1);
  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch("/api/addlinks");
      const data = await response.json();
      return data;
    };
    getResponse().then((data) => {
      const allLinks = data.message;
      const filteredLinks = allLinks.filter(
        (link) => link.projectId == projectId
      );
      const projectLinks = filteredLinks.length == 0 ? {} : filteredLinks[0];
      const githubLink = projectLinks.github;
      const googledriveLink = projectLinks.googledrive;
      const trelloLink = projectLinks.trello;
      const slackLink = projectLinks.slack;
      const etcLinks = projectLinks.etc;
      setGithubLinks(githubLink);
      setGoogleDriveLinks(googledriveLink);
      setTrelloLinks(trelloLink);
      setSlackLinks(slackLink);
      setEtcLinks(etcLinks);
    });
  }, []);

  const deleteLink = async (name) => {
    const data = { name: name, projectId: projectId };
    let response = await fetch("/api/addlinks", {
      method: "PUT",
      body: JSON.stringify(data),
    });
    console.log(response.json());
  };

  return (
    <Card className="m-r-10">
      <CardBody className="">
        <h3 className="m-b-15" style={{ fontFamily: "Spoca_B" }}>
          Registered Link
        </h3>
        <div>
          <CardSubtitle
            className="mb-2 text-muted"
            style={{ fontFamily: "RIDI" }}
          >
            클릭시 해당 링크로 이동합니다
          </CardSubtitle>
        </div>
        <ListGroup flush>
          <ListGroupItem
            key="github"
            action
            href={githubLink}
            tag="a"
            className="d-flex align-items-center p-3 border-0"
          >
            <div>
              {/*<i className="m-r-5">{FaGithub}</i>*/}
              GitHub :
              <a className={githubLink === "" ? "hide" : "m-l-5"}>
                {githubLink}
              </a>
              <button
                id={`delete-btn github`}
                onClick={(e) => {
                  e.preventDefault();
                  setGithubLinks("");
                  deleteLink("github");
                }}
              >
                <TiDelete size={20} />
              </button>
              <style jsx>{`
                h3 {
                  font-family: "Spoca_B";
                }
                button {
                  background-color: transparent;
                  border-color: transparent;
                }
              `}</style>
            </div>
          </ListGroupItem>

          <ListGroupItem
            key="googledrive"
            action
            href={googleDriveLink}
            tag="a"
            className="d-flex align-items-center p-3 border-0"
          >
            <div>
              {/*<i className="m-r-5">{FaGithub}</i>*/}
              GoogleDrive :
              <a className={googleDriveLink === "" ? "hide" : "m-l-5"}>
                {googleDriveLink}
              </a>
              <button
                id={`delete-btn googledrive`}
                onClick={(e) => {
                  e.preventDefault();
                  setGoogleDriveLinks("");
                  deleteLink("googledrive");
                }}
              >
                <TiDelete size={20} />
              </button>
              <style jsx>{`
                h3 {
                  font-family: "Spoca_B";
                }
                button {
                  background-color: transparent;
                  border-color: transparent;
                }
              `}</style>
            </div>
          </ListGroupItem>

          <ListGroupItem
            key="trello"
            action
            href={trelloLink}
            tag="a"
            className="d-flex align-items-center p-3 border-0"
          >
            <div>
              {/*<i className="m-r-5">{FaGithub}</i>*/}
              Trello :
              <a className={trelloLink === "" ? "hide" : "m-l-5"}>
                {trelloLink}
              </a>
              <button
                id={`delete-btn trello`}
                onClick={(e) => {
                  e.preventDefault();
                  setTrelloLinks("");
                  deleteLink("trello");
                }}
              >
                <TiDelete size={20} />
              </button>
              <style jsx>{`
                h3 {
                  font-family: "Spoca_B";
                }
                button {
                  background-color: transparent;
                  border-color: transparent;
                }
              `}</style>
            </div>
          </ListGroupItem>

          <ListGroupItem
            key="slack"
            action
            href={slackLink}
            tag="a"
            className="d-flex align-items-center p-3 border-0"
          >
            <div>
              {/*<i className="m-r-5">{FaGithub}</i>*/}
              Slack :
              <a className={slackLink === "" ? "hide" : "m-l-5"}>{slackLink}</a>
              <button
                id={`delete-btn slack`}
                onClick={(e) => {
                  e.preventDefault();
                  setSlackLinks("");
                  deleteLink("slack");
                }}
              >
                <TiDelete size={20} />
              </button>
              <style jsx>{`
                h3 {
                  font-family: "Spoca_B";
                }
                button {
                  background-color: transparent;
                  border-color: transparent;
                }
              `}</style>
            </div>
          </ListGroupItem>

          <ListGroupItem
            key="etc"
            action
            href={etcLinks}
            tag="a"
            className="d-flex align-items-center p-3 border-0"
          >
            <div>
              {/*<i className="m-r-5">{FaGithub}</i>*/}
              etc :
              <a className={etcLinks === "" ? "hide" : "m-l-5"}>{etcLinks}</a>
              <button
                id={`delete-btn etc`}
                onClick={(e) => {
                  e.preventDefault();
                  setEtcLinks("");
                  deleteLink("etc");
                }}
              >
                <TiDelete size={20} />
              </button>
              <style jsx>{`
                h3 {
                  font-family: "Spoca_B";
                }
                button {
                  background-color: transparent;
                  border-color: transparent;
                }
              `}</style>
            </div>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default List;
