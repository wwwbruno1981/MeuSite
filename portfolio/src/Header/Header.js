import React, {useState} from 'react';

import {  
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button 
  } from 'reactstrap'
  import {Link} from 'react-router-dom'
  
  const Header = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
    setOpen(!open)
  }
  return (

      <Navbar id="Navbar"  color ="dark" dark expand="md">
            <NavbarBrand tag={Link} to='/'><Button outline color="warning">PROTFOLIO</Button></NavbarBrand>
            <NavbarToggler  onClick={toggle} />
            <Collapse  isOpen={open} navbar>
              <Nav className="ml-auto" navbar >
                <NavItem>
                <NavLink tag={Link} to='/Cadastrar'><Button color="danger" size="sm" block>Block button</Button> </NavLink> 
                 </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap"><Button color="success" size="sm" block>Block button</Button></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap"><Button color="primary" size="sm" block>Block button</Button></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap"><Button color="secondary" size="sm" block>Block button</Button></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap"><Button color="warning" size="sm" block>Block button</Button></NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>     
            </Collapse>
          </Navbar>

    )
}

  export default Header