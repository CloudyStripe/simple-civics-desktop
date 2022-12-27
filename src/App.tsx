import './App.css';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import George from './images/george_w_nav.png'
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About';
import { Container } from 'react-bootstrap';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar variant='dark' bg='dark'>
        <Container>
          <Navbar.Brand>Simply Civics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Container>
        <Container>
          <Nav className='ms-auto'>
            <Nav.Link href="/">
              <img src={George} style={{ height: '60px' }}></img>
            </Nav.Link>
          </Nav></Container>
      </Navbar>
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App;
