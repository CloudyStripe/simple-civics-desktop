import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import George from './images/george_w_nav.png'
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Presidents } from './components/Presidents/Presidents';
import { Learning } from './components/Learning/Learning';
import { Footer } from './components/Footer/Footer';
import { useAuth0 } from "@auth0/auth0-react";
import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App: React.FC = () => {

  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  return (
    <Router>
      <Navbar className="nav-container position-relative" variant='dark' bg='dark' expand="lg">
        <Container className="max-width-override">
          <Navbar.Brand className="d-none d-lg-inline-block">Simply Civics</Navbar.Brand>
          <Navbar.Toggle className="hamburger-toggle" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              {
                (!isAuthenticated && !isLoading) && (
                  <Nav.Link className='my-auto d-lg-none d-xs-block' onClick={() => loginWithRedirect()}>Login</Nav.Link>
                )
              }
              {
                (isAuthenticated && !isLoading) && (
                  <Nav.Link className='my-auto d-lg-none d-xs-block' onClick={() => logout()}>Log Out</Nav.Link>
                )
              }
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Learning">Learning</Nav.Link>
              <Nav.Link href="/Presidents">Hall of Presidents</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container>
          <Nav className='ms-auto'>
            {
              (!isAuthenticated && !isLoading) && (
                <Nav.Link className='my-auto d-none d-lg-block' onClick={() => loginWithRedirect()}>Login</Nav.Link>
              )
            }
            {
              (isAuthenticated && !isLoading) && (
                <Nav.Link className='my-auto d-none d-lg-block' onClick={() => logout()}>Log Out</Nav.Link>
              )
            }
            <Nav.Link className="george-logo" href="/">
              <img src={George} alt="George Washington Logo" style={{ height: '60px' }}></img>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Learning" element={<Learning />} />
        <Route path="/Presidents" element={<Presidents />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
