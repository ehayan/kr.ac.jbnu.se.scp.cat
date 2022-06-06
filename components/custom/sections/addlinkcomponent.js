import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Input } from "reactstrap";
import { db } from "../../../pages/firebase";

const AddLinkComponent = ({ projectId }) => {
  const router = useRouter();
  const [x, setX] = useState([]);

  //RadioButton select
  const handleClickRadioButton = (e) => {
    setX(e.target.value);
  };

  // URL;
  const [url, setURL] = useState("");
  const handleURLInput = ({ target: { value } }) => {
    setURL(value);
  };

  //click ADD Button
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (x == "") {
      alert("도구를 선택하세요");
    } else if (url == "") {
      alert("링크를 입력하세요");
    } else {
      const links = db.collection("registered_link");
      switch (x) {
        case "1": {
          const data = { "name" : "github", "projectId" : projectId, "link" : url}
          let response = await fetch('/api/addlinks', {
          method: 'POST',
          body: JSON.stringify(data),
          });
          break;
        }
        case "2": {
          const data = { "name" : "googledrive", "projectId" : projectId, "link" : url}
          let response = await fetch('/api/addlinks', {
          method: 'POST',
          body: JSON.stringify(data),
          });
          break;
        }
        case "3": {
          const data = { "name" : "trello", "projectId" : projectId, "link" : url}
          let response = await fetch('/api/addlinks', {
          method: 'POST',
          body: JSON.stringify(data),
          });
          break;
        }
        case "4": {
          const data = { "name" : "slack", "projectId" : projectId, "link" : url}
          let response = await fetch('/api/addlinks', {
          method: 'POST',
          body: JSON.stringify(data),
          });
          break;
        }
        case "5": {
          const data = { "name" : etc, "projectId" : projectId, "link" : url}
          let response = await fetch('/api/addlinks', {
          method: 'POST',
          body: JSON.stringify(data),
          });
          break;
        }
      }
      alert("저장되었습니다");
      setURL("");
      setX([]);
      router.push({
        pathname: '/project-dashboard',
        query: {
          projectId: projectId,
        },
      });
    }
  };

  return (
    <div>
      <div className="bg-light">
        <div id="banner1">
          <Container>
            <Row className="m-t-30 m-l-30 ">
              <Col className="align-self-center">
                <Form className="m-t-40" onSubmit={handleSubmit}>
                  <div className="m-l-10">
                    <Input
                      type="checkbox"
                      value="1"
                      checked={x === "1"}
                      onChange={handleClickRadioButton}
                      style={{
                        marginBottom: "2px",
                        display: "inline-block",
                        verticalAlign: "middle",
                        backgroundColor: "#efcb00",
                      }}
                    />
                    <label className="m-l-5">GitHub</label>
                  </div>
                  <br />
                  <div className="m-l-10">
                    <Input
                      type="checkbox"
                      value="2"
                      checked={x === "2"}
                      onChange={handleClickRadioButton}
                      style={{
                        marginBottom: "2px",
                        display: "inline-block",
                        verticalAlign: "middle",
                        backgroundColor: "#efcb00",
                      }}
                    />
                    <label className="m-l-5">GoogleDrive</label>
                  </div>
                  <br />
                  <div className="m-l-10">
                    <Input
                      type="checkbox"
                      value="3"
                      checked={x === "3"}
                      onChange={handleClickRadioButton}
                      style={{
                        marginBottom: "2px",
                        display: "inline-block",
                        verticalAlign: "middle",
                        backgroundColor: "#efcb00",
                      }}
                    />
                    <label className="m-l-5">Trello</label>
                  </div>
                  <br />
                  <div className="m-l-10">
                    <Input
                      type="checkbox"
                      value="4"
                      checked={x === "4"}
                      onChange={handleClickRadioButton}
                      style={{
                        marginBottom: "2px",
                        display: "inline-block",
                        verticalAlign: "middle",
                        backgroundColor: "#efcb00",
                      }}
                    />
                    <label className="m-l-5">Slack</label>
                  </div>
                  <br />
                  <div className="m-l-10">
                    <Input
                      type="checkbox"
                      value="5"
                      checked={x === "5"}
                      onChange={handleClickRadioButton}
                      style={{
                        marginBottom: "2px",
                        display: "inline-block",
                        verticalAlign: "middle",
                        backgroundColor: "#efcb00",
                      }}
                    />
                    <label className="m-l-5">etc</label>
                  </div>
                  <br />
                  <div className="m-b-20">
                    <Input
                      type="url"
                      name="url"
                      id="link-input"
                      value={url}
                      placeholder="Enter Link address"
                      className="font-15"
                      onChange={handleURLInput}
                    />
                    <Input
                      type="submit"
                      value="ADD"
                      onClick={handleSubmit}
                      className="bg-info font-semibold font-16 btn-rounded text-uppercase text-black text-center"
                    />
                    {/* <button type='submit'>ADD</button> */}
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <style jsx>{`
        h2 {
          font-family: "Spoca_B";
        }
        p {
          font-family: "RIDI";
        }
      `}</style>
    </div>
  );
};

export default AddLinkComponent;
