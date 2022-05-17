import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
} from 'reactstrap';

const PageForm = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md='4'>
            <Card>프로젝트 미리보기 화면</Card>
          </Col>
          <Col md='8'>
            <Form>
              <FormGroup>
                <Label htmlFor='name'>Project Name</Label>
                <Input
                  type='text'
                  className='form-control'
                  id='name'
                  placeholder='Enter Project Name'
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='email'>Email Address</Label>
                <Input
                  type='text'
                  className='form-control'
                  id='email'
                  placeholder='Enter email'
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <Input
                  type='text'
                  className='form-control'
                  id='password'
                  placeholder='Password'
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFFor='confirmpwd'>Confirm Password</Label>
                <Input
                  type='text'
                  className='form-control'
                  id='confirmpwd'
                  placeholder='Confirm Password'
                />
              </FormGroup>
              <Col md='12'>
                <Button
                  // type='submit'
                  className='btn btn-success waves-effect waves-light m-r-10'
                >
                  Submit
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageForm;
