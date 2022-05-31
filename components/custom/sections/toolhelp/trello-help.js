/* eslint-disable */
import React from "react";
import Image from "next/image";
import { Row, Col, Container } from "reactstrap";
import TrelloBoard from "../../../../assets/images/toolhelp/trello-board.png";
import TrelloCalendar from "../../../../assets/images/toolhelp/trello-calendar.png";

const TrelloHelp = () => {
  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" className="align-self-center ">
              <h1 className="title">Trello</h1>
              <h5 className="subtitle op-8">웹 기반 프로젝트 관리 플랫폼</h5>
              <br />
              <p>
                Trello는 대표적인 프로젝트 관리형 협업툴입니다. Trello는 하나의
                보드 위에 카드들을 만들어 여러 사람과 소통하고 할 일을 관리하며
                협업하는 툴로 프로젝트를 효율적으로 관리하고 진행할 수 있게
                도와줍니다.
              </p>
              <br />
              <br />
              <h3>
                <b>업무 관리</b>
              </h3>
              <br />
              <Image
                className="justify-content-center "
                src={TrelloBoard}
                width={800}
                height={500}
                style={{ display: "block", margin: "0 auto" }}
              />
              <p className="p-t-0 text-center">출처 : 잔디(JANDI) 블로그</p>
              <br />
              <p>
                팀원들은 하나의 보드에 카드가 포함된 리스트의 정렬을 통해 업무
                진행 현황을 쉽게 파악할 수 있습니다. 리스트의 제목은 예를 들어
                To Do, Doing, Done 정합니다 To Do 리스트에는 앞으로 해야 할
                내용의 카드를 추가하고 Doing 리스트에는 현재 진행중인 내용, Done
                리스트에는 이미 끝낸 내용 등을 카드로 추가합니다. 각 카드에는
                댓글을 작성할 수 있어 원활한 소통도 가능합니다. 또한 카드는
                드래그 앤 드롭(Drag & Drop)을 통해 쉽게 다른 리스트로 옮길 수
                있습니다. 또 해당 카드와 관련된 팀원을 추가하여 담당자를
                확인하기 쉽고 업무의 카테고리를 분리하기 위해 라벨을 활용할 수도
                있습니다.
              </p>
              <br />
              <li className="m-b-10" style={{ fontSize: "18px" }}>
                보드, 리스트, 카드 생성하기
              </li>
              <p>
                1. 상단 배너의 'Create' 버튼을 클릭하고 아래의 'Create board'를
                선택합니다
              </p>
              <p>
                2. 원하는 배경과 보드의 이름, 워크 스페이스 등을 입력한 후
                아래의 'Create' 버튼을 클릭합니다
              </p>
              <p>3. 리스트의 제목을 입력합니다 (예, To Do, Doing, Done 등)</p>
              <p>
                4. 카드를 추가할 리스트의 +Add a card 버튼을 클릭하고 카드의
                내용을 입력합니다
              </p>
              <p>
                5. 카드의 부가적인 기능을 이용하고 싶다면 카드를
                클릭합니다(설명, 댓글, 멤버 추가, 라벨 등)
              </p>
              <p>
                6. 카드를 다른 리스트로 옮기고 싶다면 드래그 앤 드롭(Drag &
                Drop)으로 원하는 리스트로 옮깁니다
              </p>
              <br />
              <br />
              <h3>
                <b>일정 관리</b>
              </h3>
              <br />
              <Image
                className="justify-content-center "
                src={TrelloCalendar}
                width={800}
                height={500}
                style={{ display: "block", margin: "0 auto" }}
              />
              <p className="p-t-0 text-center">출처 : 잔디(JANDI) 블로그</p>
              <br />
              <p>
                팀원들은 트렐로에서 제공하는 캘린더 기능을 활용해 일정을 관리할
                수 있습니다. 원하는 날짜에 카드를 생성하여 프로젝트 일정을
                관리합니다. 캘린더에도 프로젝트 업무의 카테고리별로 라벨을
                활용하면 복잡한 프로젝트의 일정도 쉽게 조율하고 확인할 수
                있습니다.
              </p>
              <br />
              <li className="m-b-10" style={{ fontSize: "18px" }}>
                캘린더 이용하기
              </li>
              <p>
                1. 보드 오른쪽 상단의 'Power-Ups'을 클릭한 후 'Add Power-Ups'를
                클릭합니다
              </p>
              <p>
                2. 검색창에 'calendar'를 입력한 후 'Calendar Power-UP'의 'ADD'
                버튼을 클릭합니다
              </p>
              <p>
                3. 보드 오른쪽 상단에 새로 생긴 'Calendar Power-Up'을 클릭합니다
              </p>
              <p>
                4. 캘린더에서 원하는 날짜를 선택한 후 아래의 'Add a card'를
                선택하여 카드를 추가합니다 카드를 추가할 때에는 카드의 제목과
                시간, 카드가 들어갈 보드의 리스트와 위치 등을 선택합니다
              </p>
              <br />
              <style jsx>{`
                a {
                  color: #3f4bf0;
                  text-decoration: underline;
                }
                h1 {
                  font-family: "Baskin_R";
                }
                h5,
                b,
                li,
                h3,
                p {
                  font-family: "RIDI";
                }
              `}</style>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TrelloHelp;
