import { Badge, Button } from 'reactstrap';
import { Accordion } from 'react-bootstrap';

const ProjectList = () => {
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            <div>
              Project 1
              <Badge className='m-l-10' pill color='primary'>
                3/16
              </Badge>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <p>Member : </p>
            <p>Registered Tools : </p>
            <Button color='primary' className='m-r-10  m-t-10'>
              Enter
            </Button>
            <Button color='danger' className='m-t-10'>
              Delete
            </Button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            <div>
              Project 2
              <Badge className='m-l-10' pill color='primary'>
                5/20
              </Badge>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <p>Member : </p>
            <p>Registered Tools : </p>
            <Button color='primary' className='m-r-10 m-t-10'>
              Enter
            </Button>
            <Button color='danger' className='m-t-10'>
              Delete
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <style jsx>{`
        p {
          font-family: 'Spoca_R';
        }

        div {
          font-family: 'Spoca_B';
        }
      `}</style>
    </div>
  );
};

export default ProjectList;
