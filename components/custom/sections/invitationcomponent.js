import { Container, Card, Button } from 'reactstrap';

const Invitation =  ({ invitations, session }) => {
  const onAcceptClink = async (e) => {
    const id = e.target.parentElement.id;
    const projectId = e.target.id;
    const name = session.user.name;
    const email = session.user.email;
    const requestBody = { "id" : id, "projectId": projectId, "name": name, "email": email }
    await fetch('/api/invitation', {
      method: 'PUT',
      body: JSON.stringify(requestBody),
    });
    window.location.reload();
  }

  const onRefuseClink = async (e) => {
    const id = e.target.id;
    console.log(id)
    const response = await fetch('/api/invitation', {
      method: 'DELETE',
      body: JSON.stringify(id),
    });
    window.location.reload();
  }

  return (
    <Container>
      <Card body className='card-shadow'>
        {
          invitations.length==0 ? 
          <p>초대가 없습니다.</p>
          :
          invitations.map((invitation) => (
            <Card body className='card-shadow'>
              <div id={invitation._id}>
                <h5 className='text-left'>INVITOR</h5>
                <p>{invitation.sender}</p>
                <h5 className='text-left'>PROJECT</h5>
                <p>{invitation.projectName}</p>
                <h5 className='text-left'>DATE</h5>
                <p>{invitation.date}</p>
                <Button id={invitation.projectId} color='primary' onClick={onAcceptClink}>Accept</Button>
                <Button id={invitation._id} className='m-l-10' onClick={onRefuseClink} color='danger'>
                  Refuse
                </Button>
              </div>
            </Card>
          ))
        }
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
