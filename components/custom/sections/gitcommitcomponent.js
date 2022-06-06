//'A' => repository name
// repository link => repository url
// commit data => commit date(YYYY.MM.DD HH:MM:SS)
// Image => commiter's profile image
// commit message => commit message

/* eslint-disable */
import React, { useEffect, useState } from "react";
import Image from "next/image";
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
import { useRouter } from "next/router";

const GitCommitComponent = () => {
  const router = useRouter();
  const projectId = router.query.projectId;
  const [link, setLink] = useState("");
  const [commits, setCommits] = useState([]);
  const [cloneBtn, setCloneBtn] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch('/api/addlinks');
      const data = await response.json();
      return data;
    }
    getResponse().then((data) => {
      const allLinks = data.message;
      const filteredLinks = allLinks.filter((link)=>(link.projectId == projectId));
      const projectLinks = filteredLinks.length == 0 ? {} : filteredLinks[0];
      const githubLink = projectLinks.github;
      setLink(githubLink);
      Github.getCommits(link).then((data) => {
        setCommits(data);
      });
      setLoading(false);
      setCloneBtn(1);
    })
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
        <div className="m-l-30 m-b-0">
          <h2 className="title">GitHub : {Github.getRepositoryName(link)}</h2>
          <p className="subtitle m-b-0">
            가장 최근 커밋 100개를 확인할 수 있습니다.
          </p>
          <p className="subtitle">
            커밋 메시지를 클릭해 자세한 내용을 확인해보세요.
          </p>
          <span className="subtitle">URL : </span>
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
              </div>
            </Col>
          </Row>

          <Row className="m-t-40">
            <Element
              style={{
                height: "500px",
                overflow: "scroll",
              }}
            >
              {loading ? (
                <div class="box">
                  <p className="m-t-12p"></p>
                  <div class="loader9"></div>
                </div>
              ) : (
                commits.map((commit) => (
                  <Col
                    md="12"
                    className="ml-auto pricing-box align-self-center"
                  >
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
                ))
              )}
            </Element>
          </Row>
        </Container>
      </div>
      <style jsx>{`
      h2{
        font-family: 'Spoca_B'
      }
      
      p{
        font-family: 'RIDI'
      }

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
  );
};

export default GitCommitComponent;
