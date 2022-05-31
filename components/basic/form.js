import React, { useState } from 'react';
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
          <Col md='10'>
            <Form>
              <FormGroup>
                <Label
                  htmlFor='name'
                  style={{
                    fontFamily: 'Spoca_B',
                  }}
                >
                  Project Name
                </Label>
                <Input
                  type='text'
                  className='form-control'
                  id='projectName'
                  placeholder='Enter Project Name'
                />
              </FormGroup>
              <FormGroup>
                <Label
                  htmlFor='explanation'
                  style={{
                    fontFamily: 'Spoca_B',
                  }}
                >
                  Project explanation
                </Label>
                <Input
                  type='text'
                  className='form-control'
                  id='explanation'
                  placeholder='Enter explanation'
                />
              </FormGroup>
              <Col md='12'>
                <Button
                  type='submit'
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
