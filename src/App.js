
import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import TeamsPage from './components/pages/Teams'
import PlayersPage from './components/pages/Players'
import TournamentsPage from './components/pages/Tournaments'
import LoginPage from './components/pages/LoginPage'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import ProfilePage from './components/pages/Profile'
import PlayersDetails from './components/playerDetails/PlayersDetails'
import {authSucces} from './actions'
import logo from './images/logo.svg'
import './App.css';

import Home from './components/pages/Home'

function App(props) {
  const {auth,authSucces,trackedPlayers} = props
    useEffect(()=>{
       const checkAuth = () =>{
        if(localStorage.auth){
            authSucces(localStorage.auth)
        }
    }
    checkAuth()
   },[])
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
                <Link to='/profile' ><button color="primary"  className='btn nav_item'>Profile</button></Link>
            </Col>   
        </Row>
        <Switch>
            <Route path ='/' exact>
                <Home/>
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
            <Route path="/players/tracked-players-list">
                <PlayersDetails trackedPlayers={trackedPlayers}/>
            </Route>
            <Route path='/login' component={LoginPage}/>
            <PrivateRoute path='/profile' component={ProfilePage}/>
        </Switch>
    </Container>
   </Router>)
}
const mapStateToProps = (state) =>{
	return{
		auth:state.auth,
        trackedPlayers:state.trackedPlayers
	}
}
const mapDispatchToProps={
	authSucces
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
