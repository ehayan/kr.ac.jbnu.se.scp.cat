import {Row, Col, Card, CardText, Container} from 'reactstrap';
import { GoTriangleDown } from 'react-icons/go';
import Image from 'next/image';
import member1 from '../../../assets/images/slack-member/ex1.png';
import member2 from '../../../assets/images/slack-member/ex2.png';
import member3 from '../../../assets/images/slack-member/ex3.png';

const SlackComponent = () => {
    return (
        <div className='align-self-center'>
            <Container className='m-t-20'>
                <Row>
                    <Col md="12">
                        <Card body className='card-shadow'>
                            <h3>#일반</h3>
                            <p className='m-l-10 m-b-0'>채널 설명</p>
                        </Card>
                    </Col>
                    <Col md="12">
                        <Card body className='card-shadow'>
                            <div className='align-self-center'>
                                <span className=' slack-date' >2022년 5월 17일 화요일
                                    {/* <button className='slack-pick-date-tri p-0 m-l-5'><GoTriangleDown /></button> */}
                                </span>
                            </div><br/>
                            <div className='text-left'>
                                <div className='slack-float-profile'>
                                    <Image src={member1} width={50} height={50} />
                                </div>
                                <div className='slack-float-conversation'>
                                    <span className='m-r-10 slack-font-name'><b>Snoopy</b></span>
                                    <span className='slack-font-time'>오전 11:45</span>
                                    <p className='m-t-5'>hello</p>
                                </div>
                                <div className='slack-float-profile'>
                                    <Image src={member2} width={50} height={50} />
                                </div>
                                <div className='slack-float-conversation'>
                                    <span className='m-r-10 slack-font-name'><b>Brown</b></span>
                                    <span className='slack-font-time'>오전 11:46</span>
                                    <p className='m-t-5 m-b-0'>hi</p>
                                    <p className='m-t-5'>I am Brown!</p>
                                </div>
                                <div className='slack-float-profile'>
                                    <Image src={member3} width={50} height={50} />
                                </div>
                                <div className='slack-float-conversation'>
                                    <span className='m-r-10 slack-font-name'><b>Woodstock</b></span>
                                    <span className='slack-font-time'>오전 11:48</span>
                                    <p className='m-t-5'>nice to meet you</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SlackComponent;