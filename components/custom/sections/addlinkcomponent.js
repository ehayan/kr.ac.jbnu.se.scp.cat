import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Input } from "reactstrap";
import { db } from "../../../pages/firebase";

const AddLinkComponent = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (x == "") {
      alert("도구를 선택하세요");
    } else if (url == "") {
      alert("링크를 입력하세요");
    } else {
      const links = db.collection("registered_link");
      switch (x) {
        case "1": {
          links.doc("github").set({
            title: "Github",
            name: "github",
            url: { url },
          });
          break;
        }
        case "2": {
          links.doc("googledrive").set({
            title: "GoogleDrive",
            name: "google drive",
            url: { url },
          });
          break;
        }
        case "3": {
          links.doc("trello").set({
            title: "Trello",
            name: "trello",
            url: { url },
          });
          break;
        }
        case "4": {
          links.doc("slack").set({
            title: "Slack",
            name: "slack",
            url: { url },
          });
          break;
        }
        case "5": {
          links.add({
            title: "Etc",
            name: "etc",
            url: { url },
          });
          break;
        }
      }
      alert("저장되었습니다");
      setURL("");
      setX([]);
    }
  };

  return (
    <div>
      <div className="bg-light">
        <section>
          <div id="banner1">
            <Container>
              <Row className="m-t-30 m-l-30 ">
                <Col className="align-self-center">
                  <Form className="m-t-40" onSubmit={handleSubmit}>
                    <div className="">
                      <Input
                        type="checkbox"
                        value="1"
                        checked={x === "1"}
                        onChange={handleClickRadioButton}
                      />
                      <label className="m-l-5">GitHub</label>
                    </div>
                    <br />
                    <div>
                      <Input
                        type="checkbox"
                        value="2"
                        checked={x === "2"}
                        onChange={handleClickRadioButton}
                      />
                      <label className="m-l-5">GoogleDrive</label>
                    </div>
                    <br />
                    <div>
                      <Input
                        type="checkbox"
                        value="3"
                        checked={x === "3"}
                        onChange={handleClickRadioButton}
                      />
                      <label className="m-l-5">Trello</label>
                    </div>
                    <br />
                    <div>
                      <Input
                        type="checkbox"
                        value="4"
                        checked={x === "4"}
                        onChange={handleClickRadioButton}
                      />
                      <label className="m-l-5">Slack</label>
                    </div>
                    <br />
                    <div>
                      <Input
                        type="checkbox"
                        value="5"
                        checked={x === "5"}
                        onChange={handleClickRadioButton}
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
        </section>
      </div>
    </div>
  );
};

export default AddLinkComponent;
