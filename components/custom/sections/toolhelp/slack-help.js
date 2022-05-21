/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Image from 'next/image';

const SlackHelp = () => {
  return (
    <div>
      <div className='static-slider10'>
        <Container>
          <Row className='justify-content-center'>
            <Col md='10' className='align-self-center '>
              <h1 className='title'>Slack</h1>
              <h5 className='subtitle op-8'>
                팀과 업무를 이어주는 단일 플랫폼
              </h5>
              <h6 className='subtitle op-8'>Slack</h6>
              <br />
              <br />
              <p>
                Slack은 팀의 업무에 관련된 커뮤니케이션이 집중되어 있는
                플랫폼입니다.
              </p>
              <br />
              <li>채널</li>
              <li>슬랙 커넥트(Slack Connect)</li>
              <li>메시징</li>
              <li>허들 및 클립</li>
              <li>접근성</li>
              <br />
              <br />
              <h3>
                <b>채널</b>
              </h3>
              <br />
              <p>1. 오른쪽 상단의 + 메뉴의 'New repository'를 선택합니다</p>
              <p>
                2. Respository name 칸에 원하는 리포지토리의 이름을 입력합니다
              </p>
              <p>
                3. 원하는 경우 Description 칸에 리포지토리의 설명을 작성합니다
              </p>
              <p>
                4. 리포지토리를 public으로 설정할 것인지 private으로 설정할
                것인지 선택합니다
              </p>
              <p>5. 'Add a README file'을 선택합니다</p>
              <p>6. 아래의 'Create repository'를 클릭합니다</p>
              <br />
              <br />
              <h3>
                <b>분기(branch) 만들기</b>
              </h3>
              <br />
              <h5>
                <b>브랜치(branch)에 대해</b>
              </h5>
              <p>
                분기(branch)란 리포지토리의 병렬(parallel) 버전입니다. 이 분기는
                저장소 내에 존재하지만 원래의 버전에 영향을 주지 않고 변경할 수
                있습니다. 자유롭게 변경한 이후 기본 분기에 병합하여 변경 사항을
                적용시킬 수 있습니다. 브랜치는 기본적으로 'main'의 이름을 가진
                기본 브랜치가 있습니다. main에서 새로운 브랜치를 만들어 기존
                브랜치에 상관없이 프로젝트를 수정하고 변경할 수 있습니다. 다른
                브랜치에서 수행한 작업들은 병합 이후 main에 표시됩니다.
              </p>
              <br />
              <h6>
                <b>하나의 리포지토리를 여러 구성원이 사용하고 있다면?</b>
              </h6>
              <p>
                main에 새로운 브랜치를 만들어 각자 원하는 작업을 수행한 후
                병합하면 다른 구성원이 작업한 소스코드가 추가된 main 저장소를 볼
                수 있습니다. 하지만 여기서 중요한 점은 main에 병합 전 다른
                구성원이 먼저 병합을 진행했다면 업데이트 된 사항을 자신의
                브랜치에 추가한 후 병합해야 올바른 병합이 될 수 있습니다.
              </p>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SlackHelp;
