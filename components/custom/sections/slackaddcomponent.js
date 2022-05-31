import { Form, Input, Row, Col, Card, CardText, Container } from "reactstrap";
import { useState } from "react";
import { sendMessage } from "../../../api/slack";

const SlackComponent = (props) => {
  const [message, setMessage] = useState("");
  const webhook = props.value;
  const handleMessageInput = ({ target: { value } }) => {
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const msgInput = event.target.parentElement.children[0];
    const msg = msgInput.value;
    sendMessage(webhook, msg);
    msgInput.value = "";
  };

  return (
    <div>
      <div className="align-self-center m-t-40">
        <Container className="m-t-20 p-0">
          <Row>
            <Col md="12">
              <Card body className="card-shadow m-b-0">
                <p className="m-l-10 m-t-5 m-b-5">
                  공지를 작성해 채널에 메시지를 보내세요.
                </p>
                <p className="m-l-10 m-b-5">
                  프로젝트 멤버가 보낸 메시지는 오른쪽에서 확인할 수 있습니다.
                </p>
              </Card>
            </Col>
            <Col md="12">
              <Form className="m-t-10" onSubmit={handleSubmit}>
                <div className="m-b-20 slack-input">
                  <Input
                    type="text"
                    value={message}
                    placeholder="Enter Message"
                    className="font-15 "
                    style={{ height: "200px" }}
                    onChange={handleMessageInput}
                  />
                  <Input
                    type="submit"
                    value="Send"
                    onClick={handleSubmit}
                    style={{
                      borderRadius: "10px",
                    }}
                    className="m-t-10 bg-info font-semibold font-16 btn-rounded text-uppercase text-black text-center"
                  />
                  {/* <button type='submit'>ADD</button> */}
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
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

export default SlackComponent;
