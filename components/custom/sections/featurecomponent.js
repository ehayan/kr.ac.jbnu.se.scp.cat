/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import githubLogo from "../../../assets/images/tool-logos/git-hub.png";
import trelloLogo from "../../../assets/images/tool-logos/trello.png";
import slackLogo from "../../../assets/images/tool-logos/slack.png";
import notionLogo from "../../../assets/images/tool-logos/notion.png";
import { useRouter } from "next/router";
import Link from "next/link";

const FeatureComponent = () => {
  const router = useRouter();

  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="0" className="text-center">
              <h1 className="title font-bold">지원 도구 도움말</h1>
              <h6 className="subtitle">
                협업 지원 도구를 사용하기 어렵다면
                <br />
                CAT이 제공하는 도움말을 통해 사용법을 익혀보세요.
              </h6>
              <br />
              <Image src={githubLogo} width={80} height={80}/>
              <Image src={trelloLogo} width={80} height={80}/>
              <Image src={slackLogo} width={80} height={80}/>
              <Image src={notionLogo} width={80} height={80}/>
              <br />
              <Link href="/toolhelp/github" >
                GitHub
              </Link>
              <Link href="/toolhelp/trello">
                Trello     
              </Link>
              <Link href="/toolhelp/slack">
                Slack     
              </Link>
              <Link href="/toolhelp/notion">
                Notion     
              </Link>
            </Col>
          </Row>
          <style jsx>{`
            Link{
              text-decoration: none;
              color: black;
            }
          `}</style>
        </Container>]
      </div>
    </div>
  );
};

export default FeatureComponent;

      {/* </div>
      <div className="spacer feature4">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-danger label-rounded">
                Feature 1
              </span>
              <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">Instant Solutions</h5>
                  <p className="m-t-20">
                    You can relay on our amazing features list and also our
                    customer services will be great experience. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Praesent
                    tristique pellentesque ipsum.
                  </p>
                  <a href="#" className="linking text-themecolor">
                    Explore More<i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">Powerful Techniques </h5>
                  <p className="m-t-20">
                    You can relay on our amazing features list and also our
                    customer services will be great experience. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Praesent
                    tristique pellentesque ipsum.{" "}
                  </p>
                  <a className="linking text-themecolor" href="#">
                    Explore More <i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-light spacer feature20 up">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-info label-rounded">Feature 2</span>
              <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row>
          <Row className="wrap-feature-20">
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img1}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img2}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img3}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img4}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <Image
                src={img5}
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <span className="label label-info label-rounded">
                      Feature 3
                    </span>
                    <h3 className="title">
                      The New way of Making Your Website in mins
                    </h3>
                    <p>
                      You can relay on our amazing features list and also our
                      customer services will be great experience. You will love
                      it for sure.
                    </p>
                    <a
                      className="btn btn-danger btn-md btn-arrow m-t-20"
                      href="#"
                    >
                      <span>
                        Explore More <i className="ti-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </CardBody>
              </Card> */}
            {/* </Col>
          </Row>
        </Container>
      </div> */}
//     </div>
//   );
// };

