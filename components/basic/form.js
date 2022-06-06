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

const PageForm = ({session}) => {
  const handlePost = async (e) =>{
    const title = e.target[0].value;
    const content = e.target[1].value;
    
    let project = {
      title,
      content,
      users : [{
        "name" : session.user.name,
        "email" : session.user.email
      }],
      createdAt: new Date().toISOString(),
    };

    //save the post
    let response = await fetch('/api/addproject', {
      method: 'POST',
      body: JSON.stringify(project),
    });

    // get the data
    let data = await response.json();
    console.log(data)
  }

  return (
    <div>
      <Container>
        <Row>
          <Col md='10'>
            <Form onSubmit={handlePost}>
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
                <div>
                <Button
                  type='submit'
                  className='btn btn-success waves-effect waves-light m-r-10'
                >
                  Submit
                </Button>
                </div>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageForm;