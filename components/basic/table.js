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
                    <th>Download / Delete</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Deshmukh</td>
                    <td>Prohaska</td>
                    <td>@Genelia</td>
                    <td>
                      <button className='label-success'>✔</button>
                      <button className='label-danger'>❌</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Deshmukh</td>
                    <td>Gaylord</td>
                    <td>@Ritesh</td>
                    <td>
                      <button className='label-success'>✔</button>
                      <button className='label-danger'>❌</button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sanghani</td>
                    <td>Gusikowski</td>
                    <td>@Govinda</td>
                    <td>
                      <button className='label-success'>✔</button>
                      <button className='label-danger'>❌</button>
                    </td>
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
