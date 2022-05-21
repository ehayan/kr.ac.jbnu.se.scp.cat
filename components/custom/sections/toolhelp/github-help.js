/* eslint-disable */
import React from 'react';
import Image from 'next/image';
import { Row, Col, Container } from 'reactstrap';
import Link from 'next/link';

const GitHubHelp = () => {
  return (
    <div>
      <div className='static-slider10'>
        <Container>
          <Row className='justify-content-center'>
            <Col md='10' className='align-self-center '>
              <h1 className='title'>GitHub</h1>
              <h5 className='subtitle op-8'>
                버전 관리 및 협업을 위한 코드 호스팅 플랫폼
              </h5>
              <br />
              <h6>
                *해당 내용은 GitHub 문서의 내용을 바탕으로 작성되었습니다.
              </h6>
              <Link href='https://docs.github.com/en/get-started/quickstart/hello-world#creating-a-branch'>
                <a>원문 보기</a>
              </Link>
              <br />
              <br />
              <p>
                GtiHub는 버전 관리 및 협업을 위한 코드 호스팅 플랫폼입니다.
                GitHub는 코드 저장소인 리포지토리(repository)를 생성할 수
                있습니다. 리포지토리는 일반적으로 단일 프로젝트를 구성하는 데
                사용됩니다.
              </p>
              <br />
              <li>리포지토리(repository) 생성 및 사용</li>
              <li>새 분기(branch) 시작 및 관리</li>
              <li>커밋으로 GitHub에 푸시</li>
              <li>풀 리퀘스트(pull request) 열기 및 병합(merge)</li>
              <br />
              <br />
              <h3>
                <b>리포지토리(repository) 생성</b>
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

              <style jsx>{`
                a {
                  color: #3f4bf0;
                  text-decoration: underline;
                }
              `}</style>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GitHubHelp;
