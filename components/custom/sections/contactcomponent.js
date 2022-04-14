import React from 'react';
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import {signIn, signOut, useSession} from 'next-auth/react';

const ContactComponent = () => {
  const {data: session, status} = useSession();

  if(status === 'loading'){
    <p>Loading...</p>
  }
  return (
    <div>
      {/* <div className='spacer bg-light'>
        <Container>
          <Row className='justify-content-center'>
            <Col md='7' className='text-center'>
              <h1 className='title font-bold'>Contact Form</h1>
              <h6 className='subtitle'>
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className='contact1'>
        <div class='Row'>
          <Container>
            <div className='spacer'>
              <Row className='m-0'>
                <Col lg='8'>
                  <div className='contact-box p-r-40'>
                    <h3 className='title'>SignUp</h3>
                    <Form>
                      <Row>
                        <Col lg='6'>
                          <FormGroup className='m-t-15'>
                            <Input type='text' placeholder='ID' />
                          </FormGroup>
                        </Col>
                        <Col lg='6'>
                          <FormGroup className='m-t-15'>
                            <Input type='text' placeholder='Password' />
                          </FormGroup>
                        </Col>
                        <Col lg='12'>
                          <FormGroup className='m-t-15'>
                            <Input
                              type='email'
                              name='text'
                              placeholder='Confirm E-Mail'
                            />
                          </FormGroup>
                        </Col>
                        <Col lg='12'>
                          <Button
                            type='submit'
                            className='btn btn-danger-gradiant m-t-20 btn-arrow'
                          >
                            <span>
                              {' '}
                              Submit <i className='ti-arrow-right'></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col lg='4'>
                  <div className='detail-box p-40 bg-info'>
                    <h2 className='text-white'>Social Login</h2>
                    {/* <p className='text-white m-t-30 op-8'>
                      251 546 9442
                      <br /> info@wrappixel.com
                    </p> */}
                    
                    {!session &&(
                       <button onClick={() => signIn()}> Google Login</button> 
                    )}
                    {session &&(
                      <button onClick={() => signOut()}> Google Logout</button>
                    )}
                    <style jsx>{`
                      button{
                        background-color:rgb(255,255,255);
                        display:inline-flex;
                        align-items:center,;
                        clolr: rgba(0,0,0,0.54);
                        box-shadow: rgb(0,0,0,0.24) 0px 2px 2px 0px, rgba(0,0,0,0.24) 0px 0px 1px 0px;
                        padding: 5px;
                        border-radius: 2px;
                        border: 1px solid transparent;
                        font-size:14px;
                        font-weight:500;
                        font-family:Roboto, sans-serif;
                    `}</style>
                    
                    <p className='text-white op-8'>
                      601 Sherwood Ave.
                      <br /> San Bernandino, CA 92404
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
