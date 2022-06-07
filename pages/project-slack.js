import Head from "next/head";
import { Row, Col, Container } from "reactstrap";
import SlackListComponent from "../components/custom/sections/slacklistcomponent";
import SlackInputComponent from "../components/custom/sections/slackinputcomponent";
import SlackAddComponent from "../components/custom/sections/slackaddcomponent";
import { db } from "./firebase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Slack = () => {
  const router = useRouter();
  const projectId = router.query.projectId;
  const [hasWebhook, setHasWebhook] = useState(false);
  const [url, setUrl] = useState("");
  const [webhook, setWebhook] = useState("");

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
      const slackLink = projectLinks.slack;
      const webhook = projectLinks.slackWebhook;
      setUrl(slackLink);
      setWebhook(webhook);
      if(webhook != undefined && webhook != "")
        setHasWebhook(true);
    })
  }, []);

  return (
    <div>
      <Head>
        <title>PROBBY | Slack</title>
        <link rel="icon" href="/probby_logo.png" />
      </Head>
      <div className="m-l-30">
        <h2 className="title font-bold">Slack</h2>
        <span className={url === "" ? "hide" : "m-l-5"}>URL : </span>
        <a href={url} className={url === "" ? "hide" : "m-l-5"}>
          {url}
        </a>
      </div>
        {hasWebhook ? (
        <Container>
          <Row>
            <Col md="6">
              <SlackAddComponent value={webhook} />
            </Col>
            <Col md="6">
              <SlackListComponent />
            </Col>
          </Row>
        </Container>
        ) : (
          <SlackInputComponent link={url} router={router}/>
          )}
    </div>
  );
};
export default Slack;
