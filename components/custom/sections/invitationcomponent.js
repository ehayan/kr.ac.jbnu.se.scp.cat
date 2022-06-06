import { Container, Card, Button } from 'reactstrap';
import { useState } from 'react';

const Invitation =  () => {

  

  return (
    <Container>
      <Card body className='card-shadow'>
        <Card body className='card-shadow'>
          <div>
            <h5 className='text-left'>INVITOR</h5>
            <p>aaa</p>
            <h5 className='text-left'>PROJECT</h5>
            <p>bbb</p>
            <h5 className='text-left'>DATE</h5>
            <p>2022-04-20</p>
            <Button color='primary'>Accept</Button>
            <Button className='m-l-10' color='danger'>
              Refuse
            </Button>
          </div>
        </Card>

        <Card body className='card-shadow'>
          <div>
            <h5 className='text-left'>INVITOR</h5>
            <p>ccc</p>
            <h5 className='text-left'>PROJECT</h5>
            <p>ddd</p>
            <h5 className='text-left'>DATE</h5>
            <p>2022-05-12</p>
            <Button color='primary'>Accept</Button>
            <Button className='m-l-10' color='danger'>
              Refuse
            </Button>
          </div>
        </Card>
      </Card>
      <style jsx>{`
        h5 {
          font-family: 'Spoca_B';
        }
        p {
          font-family: 'Spoca_R';
        }
      `}</style>
    </Container>
  );
};

export default Invitation;
