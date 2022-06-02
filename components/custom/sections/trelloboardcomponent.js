/* eslint-disable */
import { useCallback, useEffect, useState } from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import * as Trello from "../../../api/trello";
import { Element, animateScroll as scroll } from "react-scroll";
import { db } from "../../../pages/firebase";

const TrelloBoardComponent = (prop) => {
  // const link = "https://trello.com/b/i6j02hs3/cat-example";
  // const APIkey = "1baedb69e84e135c003ec353a955fe47";
  // const TOKEN =
  //   "4081aef89869ef47cd712c6366d7882f7b8f20fc53239e9fd8f6b44bba648d68";

  // const [link, setLink] = useState();
  // const [APIkey, setAPIkey] = useState();
  // const [TOKEN, setTOKEN] = useState();

  const [trelloDatas, setTrelloDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  // const fetchData = () => {
  //   db.collection("registered_link")
  //     .doc("trello")
  //     .get()
  //     .then((snapshot) => {
  //       const url = snapshot.data().url.url;
  //       const api = snapshot.data().APIkey.API;
  //       const token = snapshot.data().token.token;

  //       setlink(url);
  //       setAPIkey(api);
  //       setTOKEN(token);
  //     });
  // };

  // console.log(prop.link);

  useEffect(() => {
    Trello.getDatas(prop.link, prop.api, prop.token).then((datas) => {
      setTrelloDatas(datas);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <div>
        <div className="m-l-30">
          <h2 className="title font-bold">
            Trello : {Trello.getProjectName(prop.link)}
          </h2>
          <span className="subtitle">URL : </span>
          <a href={prop.link}>{prop.link}</a>
        </div>
        <Element
          style={{
            width: "1700px",
            height: "800px",
            overflow: "scroll",
          }}
        >
          <Row className="m-l-5 m-t-30 trello-flex-nowrap">
            {loading ? (
              <div class="box">
                <p className="m-t-12p"></p>
                <div className="loader9"></div>
              </div>
            ) : (
              trelloDatas.map((data) => (
                <Card className=" board-card board-align card-width-300 m-b-0 p-0 b-all m-l-20">
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
              ))
            )}
          </Row>
        </Element>
      </div>
      <style jsx>{`
        h2 {
          font-family: "Spoca_B";
        }
        span,
        p {
          font-family: "RIDI";
        }
      `}</style>
    </div>
  );
};

export default TrelloBoardComponent;
