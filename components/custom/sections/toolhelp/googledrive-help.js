/* eslint-disable */
import React from "react";
import Image from "next/image";
import { Row, Col, Container } from "reactstrap";
import Link from "next/link";

const GoogleDriveHelp = () => {
  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" className="align-self-center ">
              <h1 className="title">Google Drive</h1>
              <h5 className="subtitle op-8">
                개인용 클라우드 스토리지 및 파일 공유 플랫폼
              </h5>
              <br />
              <br />
              <h3>
                <b>Google Drive의 기능</b>
              </h3>
              <br />
              <li className="m-b-10" style={{ fontSize: "18px" }}>
                멀웨어, 스팸, 랜섬웨어 방지를 위한 보호 기능 내장
              </li>
              <p>
                Drive를 통해 안전하게 암호화된 방식으로 파일에 액세스할 수
                있습니다. 사용자와 공유된 파일은 자동으로 검사되어 멀웨어, 스팸,
                랜섬웨어, 피싱이 감지된 경우 삭제되며, 클라우드 기반의 Drive를
                사용하면 로컬에 파일을 저장할 필요가 없어 기기에 대한 리스크도
                최소화됩니다.
              </p>
              <br />
              <li className="m-b-10" style={{ fontSize: "18px" }}>
                팀워크를 극대화시키는 사용자 중심 공동작업 앱
              </li>
              <p>
                Drive는 Docs, Sheets, Slides 등 팀이 효과적으로 실시간 콘텐츠
                제작 및 공동작업을 진행할 수 있도록 지원하는 클라우드 기반
                공동작업 앱과 원활하게 통합됩니다.
              </p>
              <br />
              <li className="m-b-10" style={{ fontSize: "18px" }}>
                이미 팀에서 사용 중인 도구 및 앱과 통합
              </li>
              <p>
                Drive는 팀에서 이미 사용하던 기술과 통합되고 이를 보완해 줍니다.
                파일 형식을 변환하지 않고도 Microsoft Office 파일로
                공동작업하고, PDF, CAD 파일, 이미지 등 100가지가 넘는 파일
                형식을 수정하고 저장하세요.
              </p>
              <br />
              <li className="m-b-10" style={{ fontSize: "18px" }}>
                Google의 Search 및 AI 기술로 팀의 작업 속도 향상
              </li>
              <p>
                Google의 강력한 검색 기능이 Drive에 내장되어 있어 속도, 안전성,
                공동작업이 개선됩니다. 또한 Drive 검색 칩과 같은 기능을 통해
                관련성이 더 높은 검색결과를 신속하게 검색하여 파일을 빠르게 찾을
                수 있습니다.
              </p>
              <br />
              <br />
              <h3>
                <b>Google Drive의 사용법</b>
              </h3>
              <br />
              <li className="m-b-10" style={{ fontSize: "18px" }}>
                파일 및 폴더 업로드 하기
              </li>
              <p>1. 왼쪽 상단의 '새로 만들기'를 선택합니다</p>
              <p>
                2. 파일을 업로드 할 경우 '파일'을, 폴더를 업로드 할 경우
                '폴더'를 선택합니다
              </p>
              <p>3. 업로드 할 파일 또는 폴더를 선택합니다</p>
              <p>4. 파일 또는 폴더 섹션에 선택한 파일이 업로드됩니다</p>
              <br />
              <li className="m-b-10" style={{ fontSize: "18px" }}>
                Google Docs, Google Sheets 등 이용하기
              </li>
              <p>1. 왼쪽 상단의 '새로 만들기'를 선택합니다</p>
              <p>
                2. 아래의 Google 문서, Google 스프레드 시트, Google 프레젠테이션
                등의 목록에서 이용하고자 하는 도구를 선택합니다
              </p>
              <p>
                3. 새로운 페이지가 생성되어 선택한 도구를 사용할 수 있도록
                준비됩니다
              </p>
              <br />
              <li className="m-b-10" style={{ fontSize: "18px" }}>
                팀원과 함께 Google Docs, Google Sheets 등 이용하기
              </li>
              <p>
                Google Drive에서는 Google Docs, Google Sheets 등을 팀원과 함께
                사용하고 공유할 수 있습니다
              </p>
              <p>
                1. 공유하고자 하는 팀원을 추가하기 전에 문서의 이름을 반드시
                지정해야 합니다
              </p>
              <p>2. 오른쪽 상단의 '공유' 버튼을 클릭합니다</p>
              <p>
                3. 사용자 및 그룹 추가에 추가하려는 팀원의 Google Email을
                입력합니다
              </p>
              <p>
                4. 추가된 팀원은 Gmail을 통해 공유 문서에 입장할 수 있습니다
                또한 공유 문서는 Google Drive 왼쪽 사이드바의 '공유 문서함'에서
                현재 공유중인 파일을 확인할 수 있습니다
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

export default GoogleDriveHelp;
