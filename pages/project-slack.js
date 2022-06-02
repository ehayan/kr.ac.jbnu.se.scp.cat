import Head from "next/head";
import { Row, Col, Container } from "reactstrap";
import SlackListComponent from "../components/custom/sections/slacklistcomponent";
import SlackInputComponent from "../components/custom/sections/slackinputcomponent";
import SlackAddComponent from "../components/custom/sections/slackaddcomponent";
import { db } from "./firebase";
import { useState, useEffect } from "react";

const Slack = (page) => {
  const [hasWebhook, setHasWebhook] = useState(false);
  const [url, setUrl] = useState("");
  const [webhook, setWebhook] = useState("");

  useEffect(() => {
    db.collection("registered_link")
      .doc("slack")
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setUrl(snapshot.data().url.url);
          if (snapshot.data().webhook != "") {
            // console.log(doc.data().webhook.webhook);
            setHasWebhook(true);
            setWebhook(snapshot.data().webhook);
          }
        }
      });
  }, []);

  return (
    <div>
      <Head>
        <title>PROBBY | Slack</title>
        <link rel="icon" href="/favicon.ico" />
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
        <SlackInputComponent />
      )}
    </div>
  );
};
export default Slack;
