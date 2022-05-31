/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";

const SlackHelp = () => {
  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" className="align-self-center ">
              <h1 className="title">Slack</h1>
              <h5 className="subtitle op-8">클라우드 기반 메신저 플랫폼</h5>
              <br />
              <p>
                Slack은 팀의 업무에 관련된 커뮤니케이션이 집중되어 있는
                플랫폼입니다.
              </p>
              <br />
              <br />
              <h3>
                <b>채널</b>
              </h3>
              <br />
              <p>
                채널을 통해 팀원과 함께 아이디어를 내고 결정하고 업무를 진행할
                수 있습니다.
              </p>
              <br />
              <p>
                <b>공개 채널</b>
              </p>
              <p>
                모두가 참여할 수 있거나 검색할 수 있는 채널로 회사 내 모든
                사람들에게 공개됩니다. 대화 상황을 모두가 쉽게 파악할 수 있어
                업무에 투명성이 높아집니다.
              </p>
              <br />
              <p>
                <b>비공개 채널</b>
              </p>
              <p>
                민감한 정보나 기밀 사항을 다루는 경우 비공개 채널을 사용할 수
                있습니다. 초대된 사람만 채널을 방문하거나 업무 내용을 검색할 수
                있습니다.
              </p>
              <br />
              <p>
                <b>Slack Connect</b>
              </p>
              <p>
                외부 여러 조직과 협업할 수 있는 채널입니다. 고객, 협력업체,
                대행사 등 파트너들과 빠르게 소통할 수 있습니다.
              </p>
              <br />
              <li className="m-b-10" style={{ fontSize: "18px" }}>
                채널 생성하기
              </li>
              <p>
                1. 원하는 워크 스페이스에서 왼쪽 사이드바의 '채널' 섹션의 채널
                추가 버튼을 클릭합니다
              </p>
              <p>
                2. 채널 생성 버튼을 클릭한 후 채널의 이름과 설명, 공개 또는
                비공개 여부를 선택하여 '생성' 버튼을 클릭합니다
              </p>
              <p>
                3. 채널에 다른 팀원을 추가하고 싶은 경우 아래의 '팀원 추가'
                버튼을 클릭한 후 추가하고자 하는 팀원의 Google Email을
                입력합니다
              </p>
              <br />
              <br />
              <h3>
                <b>Slack Connect</b>
              </h3>
              <br />
              <p>
                Slack Connect를 통해 회사 외부 사람들과 더 원활하게 협업할 수
                있습니다.
              </p>
              <br />
              <li className="m-b-10" style={{ fontSize: "18px" }}>
                Slack Connect 이용하기
              </li>
              <p>1. 새로운 채널을 생성합니다</p>
              <p>
                2. '팀원 추가'를 통해 외부 사람들의 Google Email을 입력합니다
              </p>
              <p>
                3. Business+ 또는 Enterprise Grid 플랜을 사용하고 있다면 제공된
                링크를 복사하여 외부 협업 팀원에게 공유합니다
              </p>
              <p>
                4. 외부 팀원은 링크를 클릭하여 Slack 내에서 채널을 수락하고
                설정합니다
              </p>
              <p>5. 승인을 위해 양 팀의 관리자에게 초대가 전송됩니다</p>
              <br />
              <br />
              <h3>
                <b>허들 및 클립</b>
              </h3>
              <br />
              <p>
                허들을 통해 비대면 회의를 간편하게 진행할 수 있고 파일을
                첨부하여 커뮤니케이션이 더 쉬워집니다.
              </p>
              <br />
              <li className="m-b-10" style={{ fontSize: "18px" }}>
                허들 이용하기
              </li>
              <p>1. 원하는 채널에 입장합니다</p>
              <p>2. 왼쪽 하단의 헤드셋 버튼을 클릭합니다</p>
              <p>
                3. 필요 시 왼쪽 하단의 화면 공유 버튼을 클릭해 필요한 자료
                화면을 팀원과 공유할 수 있습니다
              </p>
              <p>
                4. 허들 종료 시 시작과 같이 왼쪽 하단의 헤드셋 버튼을 다시
                클릭합니다
              </p>
              <br />
              <br />
              <li className="m-b-10" style={{ fontSize: "18px" }}>
                클립 생성 및 보내기 *유료 버전 한정
              </li>
              <p>1. 원하는 채널에 입장합니다</p>
              <p>
                2. 메시지를 작성하는 칸 하단의 카메라 또는 마이크 버튼을
                클릭합니다
              </p>
              <p>
                3. 카메라 버튼을 클릭하여 영상을 촬영하거나 마이크 버튼을
                클릭하여 오디오 클립을 생성할 수 있습니다
              </p>
              <p>
                4. 클립 생성 후 '첨부' 버튼을 클릭하여 채널에 보낼 수 있습니다
              </p>
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

export default SlackHelp;
