//'A' => repository name
// repository link => repository url
// commit data => commit date(YYYY.MM.DD HH:MM:SS)
// Image => commiter's profile image
// commit message => commit message

/* eslint-disable */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import GitLogo from "../../../assets/images/tool-logos/small-git-hub.png";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import * as Github from "../../../api/github";
import { BiCopy } from "react-icons/bi";
import { BsCheck2 } from "react-icons/bs";
import {
  Element,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const GitCommitComponent = () => {
  const link = "https://github.com/gusdn6901/kr.ac.jbnu.se.scp.cat";
  const [commits, setCommits] = useState([]);
  const [cloneBtn, setCloneBtn] = useState(0);

  useEffect(() => {
    Github.getCommits(link).then((data) => {
      setCommits(data);
    });
    setCloneBtn(1);
  }, []);

  function cloneAddress() {
    const address = "";
    const ownerName = Github.getOwnerName(link);
    const repositoryName = Github.getRepositoryName(link);
    if (cloneBtn === 1) {
      address = `https://github.com/${ownerName}/${repositoryName}`;
    } else if (cloneBtn === 2) {
      address = `git@github.com:${ownerName}/${repositoryName}`;
    } else if (cloneBtn === 3) {
      address = `gh repo clone ${ownerName}/${repositoryName}`;
    }

    return address;
  }

  return (
    <div>
      <div>
        <div className="m-l-30">
          <h2 className="title ">
            Current commits of '{Github.getRepositoryName(link)}' repository
          </h2>
          <h6 className="subtitle">
            가장 최근에 푸시된 커밋과 관련된 정보를 확인할 수 있습니다.
          </h6>
          <span className="subtitle">지정된 리포지토리 :&nbsp;</span>
          <a href={link}>{link}</a>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col md="6" className="text-center">
              <h2 className="title">Clone</h2>
              <div>
                <button
                  id="clone-https"
                  className="btn-github"
                  onClick={() => {
                    setCloneBtn(1);
                  }}
                >
                  HTTPS
                </button>
                &ensp;
                <button
                  id="clone-ssh"
                  className="btn-github"
                  onClick={() => {
                    setCloneBtn(2);
                  }}
                >
                  SSH
                </button>
                &ensp;
                <button
                  id="clone-cli"
                  className="btn-github"
                  onClick={() => {
                    setCloneBtn(3);
                  }}
                >
                  GitHub CLI
                </button>
              </div>
              <div>
                <input
                  id="clone-address"
                  type="text"
                  readOnly
                  value={cloneAddress()}
                />
                <button
                  className="btn-copy"
                  onClick={() => {
                    if (typeof window !== "object") return;
                    const copyText = document.querySelector("#clone-address");
                    copyText.select();
                    document.execCommand("Copy");
                  }}
                >
                  <BiCopy />
                </button>
                <style jsx>{`
                  input{
                    border-radius: 5px;
                    border-top-right-radius: 0px;
                    border-bottom-right-radius: 0px;
                    margin-top: 10px;
                    margin-left: 15px;
                    width: 230px;
                    font-size:15px;
                  }
                  button{
                    margin-top: 10px;
                    width: 40px:
                    height:28px;
                    border-radius: 5px;
                    border-top-left-radius: 0px;
                    border-bottom-left-radius: 0px;
                  }
                `}</style>
              </div>
              {/* <div>
                  <span>Copied!</span>
                  <style jsx>{`
                    div{
                      margin-top: 10px;
                      margin-left: 250px;
                    }
                    span{
                      padding: 7px;
                      background-color : #87caeb;
                      border-radius:5px;
                    }
                  `}</style>
              </div> */}
            </Col>
          </Row>

          <Row className="m-t-40">
            <Element
              style={{
                height: "600px",
                overflow: "scroll",
              }}
            >
              {commits.map((commit) => (
                <Col md="12" className="ml-auto pricing-box align-self-center">
                  <Card className="p-2">
                    <Row>
                      <Col md="2" className="align-self-center">
                        <div>
                          <p className="github-date-bg text-center text-white m-b-0">
                            {commit.date.split("T")[0]}{" "}
                            {commit.date.split("T")[1].split("Z")[0]}
                          </p>
                        </div>
                      </Col>
                      <Col md="2" className="text-center">
                        <div
                          style={{
                            borderRadius: "50%",
                            border: "2px solid white",
                            display: "inline-block",
                            width: 70,
                            height: 70,
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src={commit.avatar_url}
                            width="70"
                            height="70"
                            objectFit="cover"
                          />
                        </div>
                      </Col>
                      <Col md="2" className="align-self-center">
                        <h5 className="m-b-0">{commit.name}</h5>
                      </Col>
                      <Col md="6" className="align-self-center">
                        <p className="m-b-0">
                          <a href={commit.commit_url}>{commit.message}</a>
                        </p>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Element>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GitCommitComponent;
