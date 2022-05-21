import React, { useState } from 'react';
import { Row, Col, Container, Form, Input } from 'reactstrap';
import Image from 'next/image';
import bannerimg from '../../../assets/images/logos/cat_logo.png';
import RegisteredList from './linklistcomponent';

const AddLinkComponent = () => {
  const [x, setX] = useState([]);
  //RadioButton select
  const handleClickRadioButton = (e) => {
    console.log(e.target.value);
    setX(e.target.value);
  };

  //URL
  const [url, setURL] = useState('');
  const handleURLInput = ({ target: { value } }) => {
    setURL(value);
    console.log(value);
  };

  //click ADD Button
  const handleSubmit = (e) => {
    e.preventDefault();

    if (x == '') {
      alert('도구를 선택하세요');
    } else if (url == '') {
      alert('링크를 입력하세요');
    } else {
      console.log(`${x} : ${url}`);
      alert(`${x} : ${url}`);
    }
  };

  return (
    <div>
      <div className='bg-light'>
        <section>
          <div id='banner1'>
            <Container>
              <Row className='m-l-30 p-t-30'>
                <Col className='align-self-center'>
                  <h2 className='title font-bold'>ADD LINK</h2>

                  <p className='m-t-20 m-b-40'>
                    Please enter the link(url) you want to add
                  </p>

                  <Form className='m-t-40' onSubmit={handleSubmit}>
                    <div className='m-b-20'>
                      <Input
                        type='radio'
                        value='1'
                        checked={x === '1'}
                        name='github'
                        onChange={handleClickRadioButton}
                      />
                      <label>GitHub</label>&nbsp;
                      <label>
                        <Input
                          type='radio'
                          value='2'
                          checked={x === '2'}
                          onChange={handleClickRadioButton}
                        />
                        GoogleDrive
                      </label>
                      <label>
                        <Input
                          type='radio'
                          value='3'
                          checked={x === '3'}
                          onChange={handleClickRadioButton}
                        />
                        Trello
                      </label>
                      <label>
                        <Input
                          type='radio'
                          value='4'
                          checked={x === '4'}
                          onChange={handleClickRadioButton}
                        />
                        Slack
                      </label>
                      <label>
                        <Input
                          type='radio'
                          value='5'
                          checked={x === '5'}
                          onChange={handleClickRadioButton}
                        />
                        etc
                      </label>
                    </div>

                    <Input
                      type='url'
                      name='url'
                      value={url}
                      placeholder='Enter Link address'
                      className='font-15'
                      onChange={handleURLInput}
                    />
                    <Input
                      type='submit'
                      value='ADD'
                      // onSubmit={(e) => {
                      //   e.preventDefault;
                      // }}
                      // onClick={handleURLInput}
                      className='bg-info font-semibold font-16 btn-rounded text-uppercase text-white text-center'
                    />
                    {/* <button type='submit'>ADD</button> */}
                  </Form>
                </Col>

                <Col className='align-self-center'>
                  <RegisteredList />
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
