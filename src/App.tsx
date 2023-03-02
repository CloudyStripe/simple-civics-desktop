import './App.css';
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
import 'bootstrap-icons/font/bootstrap-icons.css';

const App: React.FC = () => {

  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  return (
    <Router>
      <Navbar variant='dark' bg='dark'>
        <Container>
          <Navbar.Brand>Simply Civics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Learning">Learning</Nav.Link>
            <Nav.Link href="/Presidents">Hall of Presidents</Nav.Link>

          </Nav>
        </Container>
        <Container>
          <Nav className='ms-auto'>
            {
              (!isAuthenticated && !isLoading) && (
                <Nav.Link className='my-auto' onClick={() => loginWithRedirect()}>Login</Nav.Link>
              )
            }
            {
              (isAuthenticated && !isLoading) && (
                <Nav.Link className='my-auto' onClick={() => logout()}>Log Out</Nav.Link>
              )
            }
            <Nav.Link href="/">
              <img src={George} alt="George Washington Logo" style={{ height: '60px' }}></img>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Learning" element={<Learning />} />
        <Route path="/Presidents" element={<Presidents />} />
      </Routes>
    </Router>
  )
}

export default App;
