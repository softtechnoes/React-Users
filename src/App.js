import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

import Home from './Components/Home';
import Register from './Components/Register';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <header className='App-header'>
                    <Navbar bg="dark" variant='dark'>
                        <Container fluid>
                            <Navbar.Brand>
                                <Link to="/" className='nav-link'>
                                    <img src={'https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'} width="110" />
                                </Link>
                            </Navbar.Brand>
                            <Nav className='justify-content-end' >
                                <Nav>
                                    <Link to="/register" className='nav-link'>
                                        Register
                                    </Link>
                                </Nav>
                            </Nav>
                        </Container>
                    </Navbar>
                </header>
                <Container fluid>
                    <div className='wrapper'>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/register" component={Register} />
                        </Switch>
                    </div>
                </Container>
            </div>
        </Router>
    )
}
export default App;