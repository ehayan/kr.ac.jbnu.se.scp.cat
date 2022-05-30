import Head from "next/head";
import { Row, Col, Container } from "reactstrap";
import SlackListComponent from "../components/custom/sections/slacklistcomponent";
import SlackAddComponent from "../components/custom/sections/slackaddcomponent";

const Slack = (page) => {
  return (
    <div>
      <Head>
        <title>PROBBY | Slack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-l-30">
        <h2 className="title font-bold">Slack</h2>
        <p>URL : link </p>
        {/* <a href={link}>{link}</a> */}
      </div>
      <Container>
        <Row>
          <Col md="6">
            <SlackAddComponent />
          </Col>
          <Col md="6">
            <SlackListComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Slack;
