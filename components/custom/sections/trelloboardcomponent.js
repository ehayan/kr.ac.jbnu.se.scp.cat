/* eslint-disable */
import { useEffect, useState } from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import * as Trello from "../../../api/trello";
import {
  Element,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const TrelloBoardComponent = (prop) => {
  const link = "https://trello.com/b/i6j02hs3/cat-example";
  const API_KEY = "1baedb69e84e135c003ec353a955fe47";
  const TOKEN =
    "4081aef89869ef47cd712c6366d7882f7b8f20fc53239e9fd8f6b44bba648d68";
  const [trelloDatas, setTrelloDatas] = useState([]);

  useEffect(() => {
    Trello.getDatas(link, API_KEY, TOKEN).then((datas) => {
      setTrelloDatas(datas);
      // let cardLists = [];
      // datas.forEach((board) => {
      //   Trello.getCards(board.id, API_KEY, TOKEN).then((data)=> {
      //     const card = {"board" : board, "index" : datas.indexOf(board), "card" : data};
      //     cardLists.push(card);
      //   });
      // });
      // setCards(cardLists);
      // console.log(cards);
    });
    console.log(trelloDatas);
  }, []);

  return (
    <div>
      <div>
        <div className="m-l-30">
          <h2 className="title">{Trello.getProjectName(link)}</h2>
        </div>
        <Element
          style={{
            height: "600px",
            overflow: "scroll",
          }}
        >
          <Row className="m-t-30">
            {trelloDatas.map((data) => (
              // <Col md="2" className="m-l-20 align-self-center">
              <Card className="trello-flex-nowrap board-card board-align card-width-300 m-b-0 p-0 b-all">
                <p className="board-card-name m-b-0 ">{data.board.name}</p>
                <CardBody>
                  {data.card.map((card) => (
                    <Card className="card-width-270 b-all">
                      <CardBody>
                        <p className="board-card-content">{card.name}</p>
                      </CardBody>
                    </Card>
                  ))}
                </CardBody>
              </Card>
              // </Col>
            ))}
            {/* <Col md="2" className="m-l-20 align-self-center">
              <Card className="board-card board-align card-width-300 m-b-0 p-0 b-all">
                <p className="board-card-name m-b-0 ">To Do	&#40;requirments&#41;</p>
                <CardBody>
                  <Card className="card-width-270 b-all">
                      <CardBody >
                          <p className="board-card-content">트렐로/노션/슬랙</p>
                      </CardBody>
                  </Card>
                  <Card className="card-width-270 b-all">
                      <CardBody >
                          <p className="board-card-content">대시보드&#40;캘린더/참여자추가&#41;</p>
                      </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </Col> */}

            {/* <Col md="2" className="m-l-20 align-self-center">
              <Card className="board-card board-align card-width-300 m-b-0 p-0 b-all">
                <p className="board-card-name m-b-0 ">Done	&#40;requirments&#41;</p>
                <CardBody>
                  <Card className="card-width-270 b-all">
                      <CardBody >
                          <p className="board-card-content">깃허브 연동</p>
                      </CardBody>
                  </Card>
                  <Card className="card-width-270 b-all">
                      <CardBody >
                          <p className="board-card-content">구글 계정 로그인</p>
                      </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </Col>
            <Col md="2" className="m-l-20 align-self-center">
              <Card className="board-card board-align card-width-300 m-b-0 p-0 b-all">
                <p className="board-card-name m-b-0 ">To Do	&#40;assignments&#41;</p>
                <CardBody>
                  <Card className="card-width-270 b-all">
                      <CardBody >
                          <p className="board-card-content">12차 과제&#40;과제 진행 사항 발표&#41;</p>
                      </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </Col>
            <Col md="2" className="m-l-20 align-self-center">
              <Card className="board-card board-align card-width-300 m-b-0 p-0 b-all">
                <p className="board-card-name m-b-0 ">Done	&#40;assignments&#41;</p>
                <CardBody>
                  <Card className=" card-width-270 b-all">
                      <CardBody >
                          <p className="board-card-content">1차 과제&#40;브레인스토밍&#41;</p>
                      </CardBody>
                  </Card>
                  <Card className=" card-width-270 b-all">
                      <CardBody >
                          <p className="board-card-content">2차 과제&#40;아이디어 선정&#41;</p>
                      </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </Element>
      </div>
    </div>
  );
};

export default TrelloBoardComponent;
