import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Input } from "reactstrap";
import { db } from "../../../pages/firebase";

const TrelloInfoModal = ({ router }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [API, setAPI] = useState("");
  const [token, setToken] = useState("");

  const projectId = router.query.projectId;

  const handleSave = async () => {
    if (API == "" && token == "") {
      alert("API key와 Token을 입력해주세요");
    } else if (API == "") {
      alert("API key를 입력해주세요");
    } else if (token == "") {
      alert("TOKEN을 입력해주세요");
    } else {
      const data = { "projectId" : projectId, "trelloAPIKey" : API, "trelloToken" : token}
      let response = await fetch('/api/additionalLinkData', {
      method: 'PUT',
      body: JSON.stringify(data),
      }).then(()=> {
        alert("등록되었습니다");
        handleClose();
        router.push({
          pathname: '/project-dashboard',
          query: {
            projectId: projectId,
          },
        });
      });
    }
  };
  const handleAPIkey = ({ target: { value } }) => {
    setAPI(value);
  };
  const handleToken = ({ target: { value } }) => {
    setToken(value);
  };

  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        Trello API KEY / TOKEN 연동이 필요합니다
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Trello API KEY / TOKEN 연동 단계</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="m-b-20">
            1. Trello 로그인을 해주세요
            <br></br>
            2. Trello 연동을 위해 아래 링크에서<strong> API KEY / TOKEN</strong>
            을 입력해주세요
          </div>
          <a href="https://trello.com/app-key/">https://trello.com/app-key/</a>
          <br></br>
          <Form>
            <Input
              type="text"
              className="form-control m-t-10 m-b-10"
              id="APIkey"
              placeholder="Enter Trello API KEY"
              onChange={handleAPIkey}
            />
            <Input
              type="text"
              className="form-control"
              id="token"
              placeholder="Enter Trello Token"
              onChange={handleToken}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            SAVE
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TrelloInfoModal;
