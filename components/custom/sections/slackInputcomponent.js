import { Form, Input, Row, Col, Card, CardText, Container } from "reactstrap";
import { useState, useEffect, useRef } from "react";
import { db } from "../../../pages/firebase";

const SlackInputComponent = () => {
  // const [hasUrl, setHasUrl] = useState(false);
  const [hasSlack, setHasSlack] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    db.collection("registered_link")
      .doc("slack")
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          if (snapshot.data().title === "Slack") {
            setUrl(snapshot.data().url.url);
            setHasSlack(true);
          }
        }
      });
  }, []);

  const [webhook, setWebhook] = useState("");
  const handleURLInput = ({ target: { value } }) => {
    setWebhook(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    links.doc("slack").update({ webhook: webhook });
    // setHasUrl(true);
    setWebhook("");
    alert("저장되었습니다");
  };

  return (
    <div>
      <div className="align-self-center m-t-40">
        {hasSlack ? (
          <Container className="m-t-20 p-0">
            <Row>
              <Col md="12">
                <Card body className="card-shadow m-b-0">
                  <h3 className="m-l-10 m-t-5 m-b-5">
                    Slack WebHooks 추가하기
                  </h3>
                  <p className="m-l-10 m-t-5 m-b-5">
                    채널 우클릭 - 채널 세부정보 열기 - 통합 - 앱 추가 - webhook
                    검색 - Incoming WebHooks 설치 - Incoming WebHooks Slack에
                    추가 - 채널 선택 - 수신 웹 후크 통합 앱 추가
                  </p>
                  <p className="m-l-10 m-t-5 m-b-5">
                    위의 과정을 따른 후 웹후크 URL을 복사하여 아래에
                    입력해주세요.
                  </p>
                </Card>
              </Col>
              <Col md="12">
                <Form className="m-t-10" onSubmit={handleSubmit}>
                  <div className="m-b-20 ">
                    <Input
                      type="text"
                      value={webhook}
                      placeholder="Enter webhook url"
                      className="font-15 "
                      onChange={handleURLInput}
                    />
                    <Input
                      type="submit"
                      value="Enter"
                      onClick={handleSubmit}
                      style={{
                        borderRadius: "10px",
                      }}
                      className="m-t-10 bg-info font-semibold font-16 btn-rounded text-uppercase text-black text-center"
                    />
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        ) : (
          <Container className="m-t-20 p-0">
            <Row>
              <Col md="12">
                <Card body className="card-shadow m-b-0">
                  <h3 className="m-l-10 m-t-5 m-b-5">Slack 추가하기</h3>
                  <p className="m-l-10 m-t-5 m-b-5">
                    'Link' 페이지에 접속해 Slack URL을 입력해주세요.
                  </p>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
      </div>
      <style jsx>{`
        h2 {
          font-family: "Spoca_B";
        }
        h3 {
          font-family: "87MM";
          font-size: 26px;
        }
        p {
          font-family: "RIDI";
        }
      `}</style>
    </div>
  );
};

export default SlackInputComponent;
