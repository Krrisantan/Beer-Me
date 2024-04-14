import './Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

function Header() {
    
    return (
        <div className='header'>
            <div className='header__logo'>
<Link to="/">
<img src={Logo} alt="K's Bar & Grill logo" className='' />
</Link>
            </div>
            <div className='header__text'>
This is the Header! <br />

K's Bar and Grill <br />
Drop Down Menus? <br />
Sticky?

            </div>

        </div>
    )
}

export default Header;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './Header.scss';

// function Header() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto" >
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;