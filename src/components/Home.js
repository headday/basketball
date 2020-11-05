import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import TeamsPage from './Teams'
import PlayersPage from './Players'
import TournamentsPage from './Tournaments'
import logo from '../images/logo.svg'

import '../App.css'

const Home = () => {
   
  return (
   <Router>
        <Container>
        <Row>
            <Col md={{size: 3 , offset:1}}>
              <Link to='/' exact>  <img className="logo" src={logo} alt="logo"/></Link>
            </Col>
            <Col md={{size: 6, offset: 2}}>
                <Link to='/teams'><button color="primary"className='btn nav_item'>Teams</button></Link>
                <Link to='/players'><button color="primary"  className='btn nav_item'>Players</button></Link>
                <Link to='/tournaments' ><button color="primary"  className='btn nav_item'>Tournaments</button></Link>
              
            </Col>   
        </Row>
        <Switch>
            <Route path ='/' exact>
                <h1>hello</h1>
            </Route>
            <Route path='/teams'>
                <TeamsPage/>
            </Route>
            <Route exact path='/players'> 
                <PlayersPage/>
            </Route>
            <Route path='/tournaments'>
                <TournamentsPage/>
            </Route>
        </Switch>
    </Container>
   </Router>
  )
}

export default Home
