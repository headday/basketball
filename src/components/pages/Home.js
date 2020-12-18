import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import TeamsPage from './Teams'
import PlayersPage from './Players'
import TournamentsPage from './Tournaments'
import LoginPage from '../auth/LoginPage'
import {authSucces} from '../../actions'
import logo from '../../images/logo.svg'

import '../../App.css'

const Home = (props) => {
   const {auth,authSucces} = props
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
              
            </Col>   
        </Row>
        <Switch>
        
            
            <Route path ='/' exact>
            {auth == false ? <Redirect to="/login" /> :  <h1>hello</h1>   }
            </Route>
            <Route path='/teams'>
                {auth == false ? <Redirect to="/login" /> :  <TeamsPage/> }
            </Route>
            <Route exact path='/players'> 
                {auth == false ? <Redirect to="/login" /> :  <PlayersPage/> }
            </Route>
            <Route path='/tournaments'>
                {auth == false ? <Redirect to="/login" /> :  <TournamentsPage/> }
            </Route>
            <Route path='/login'>
            <LoginPage/>
                
            </Route>
        </Switch>
    </Container>
   </Router>
  )
}
const mapStateToProps = (state) =>{
	return{
		auth:state.auth,
	}
}
const mapDispatchToProps={
	authSucces
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
