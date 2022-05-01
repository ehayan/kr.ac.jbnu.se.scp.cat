import React from 'react';
import {
  Container,
  Navbar,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from 'reactstrap';

const Project_header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Navbar color='black' expand='md'>
      <Collapse navbar onClick={() => setIsOpen(!isOpen)}>
        <Container>
          <Nav className='me-auto' navbar>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Other Project
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Project 1</DropdownItem>
                <DropdownItem>Project 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Collapse>
    </Navbar>
  );
};

export default Project_header;
