import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';

const PageTable = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md='12'>
            <div className='table-responsive'>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>File Name</th>
                    <th>Uploader</th>
                    <th>Upload Date</th>
                    {/* <th>Role</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Deshmukh</td>
                    <td>Prohaska</td>
                    <td>@Genelia</td>
                    {/* <td>
                      <span className='label label-danger'>admin</span>{' '}
                    </td> */}
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Deshmukh</td>
                    <td>Gaylord</td>
                    <td>@Ritesh</td>
                    {/* <td>
                      <span className='label label-info'>member</span>{' '}
                    </td> */}
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sanghani</td>
                    <td>Gusikowski</td>
                    <td>@Govinda</td>
                    {/* <td>
                      <span className='label label-warning'>developer</span>{' '}
                    </td> */}
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Roshan</td>
                    <td>Rogahn</td>
                    <td>@Hritik</td>
                    {/* <td>
                      <span className='label label-success'>supporter</span>{' '}
                    </td> */}
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Joshi</td>
                    <td>Hickle</td>
                    <td>@Maruti</td>
                    {/* <td>
                      <span className='label label-info'>member</span>{' '}
                    </td> */}
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Nigam</td>
                    <td>Eichmann</td>
                    <td>@Sonu</td>
                    {/* <td>
                      <span className='label label-success'>supporter</span>{' '}
                    </td> */}
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageTable;
