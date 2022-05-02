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
import { BiCopy } from 'react-icons/bi';

const GitCommitComponent = () => {
  const link = "https://github.com/gusdn6901/kr.ac.jbnu.se.scp.cat";
  const [commits, setCommits] = useState([]);
  const [cloneBtn, setCloneBtn] = useState(0);
  
  useEffect(()=> {
    Github.getCommits(link).then((data)=> {
      setCommits(data);
    });
    setCloneBtn(1);
  }, []);

  function cloneAddress(){
    const address = "";
    const ownerName = Github.getOwnerName(link);
    const repositoryName = Github.getRepositoryName(link);
    if(cloneBtn === 1){
      address = `https://github.com/${ownerName}/${repositoryName}`
    }
    else if (cloneBtn === 2){
      address = `git@github.com:${ownerName}/${repositoryName}`
    }
    else if(cloneBtn === 3){
      address = `gh repo clone ${ownerName}/${repositoryName}`
    }
    
    return address;
  }

  function copyToClipboard() {
    if(typeof window !== 'object') return;
    const copyText = document.querySelector("#clone-address");
    copyText.select();
    document.execCommand("Copy");
    console.log('Copied!');
  }

  return (
    <div>
      <div className="pricing8 spacer b-t">
        <Container>
          <Row className="justify-content-center">
            <Col md="6" className="text-center">
              <h2 className="title">
                <span>Current commits of </span>
                <p>'{Github.getRepositoryName(link)}' repository</p>
              </h2>
              <h6 className="subtitle">
                가장 최근에 푸시된 커밋과 관련된 정보를 확인할 수 있습니다.
              </h6>
              <span className="subtitle">
                지정된 리포지토리 :&nbsp;
              </span>
              <a href={link}>
                {link}
              </a>
            </Col>
            <Col md="6" className="text-center">
              <h2 className="title">
                Clone
              </h2>
              <div>
                <button id="clone-https" className="btn-github" onClick={() => {setCloneBtn(1); }}> HTTPS </button>&ensp;
                <button id="clone-ssh" className="btn-github" onClick={() => {setCloneBtn(2); }}> SSH </button>&ensp;
                <button id="clone-cli" className="btn-github" onClick={() => {setCloneBtn(3); }}> GitHub CLI </button>
              </div>
              <div>
                <input id="clone-address" type="text"  readOnly value={cloneAddress()}/>
                <button className="btn-copy" onClick={copyToClipboard()}><BiCopy/></button>
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
                    height:28px;
                  }
                `}</style>
              </div>
            </Col>
          </Row>
          <Row className="m-t-40">
            {commits.map((commit) => (
              <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <p className="commit-txt btn-info p-15 btn-arrow btn-block">
                {commit.date.split('T')[0]} {commit.date.split('T')[1].split('Z')[0]}
                </p>
                <CardBody className="p-30 text-center">
                  <div
                   style={{
                     borderRadius:'50%',
                     border:"2px solid white",
                     display: "inline-block",
                     width: 70,
                     height: 70,
                     overflow: "hidden"
                    }}
                   >
                    <Image src={commit.avatar_url} width="70" height="70" objectFit="cover" />
                  </div>
                  <h5>{commit.name}</h5>
                  <p className="m-t-40">
                      <a href={commit.commit_url}>
                        {commit.message}
                      </a>
                  </p>
                </CardBody>
              </Card>
            </Col>
            ))}
            {/* <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <p className="commit-txt btn-info p-15 btn-arrow btn-block">
                date
                </p>
                <CardBody className="p-30 text-center">
                  <Image src={GitLogo} />
                  <h5>name</h5>
                  <p className="m-t-40">
                    commit message
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <p className="commit-txt btn-danger p-15 btn-arrow btn-block">
                date
                </p>
                <CardBody className="p-30 text-center">
                  <Image src={GitLogo}/>
                  <h5>name</h5>
                  <p className="m-t-40">
                    commit message
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <p className="commit-txt btn-info p-15 btn-arrow btn-block">
                date
                </p>
                <CardBody className="p-30 text-center">
                  <Image src={GitLogo}/>
                  name
                  <p className="m-t-40">
                    commit message
                  </p>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GitCommitComponent;
