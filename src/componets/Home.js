import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import {getData,getStats} from '../service/service'
import TeamsPage from './Teams'
import PlayersPage from './Players'
import TournamentsPage from './Tournaments'
import logo from '../images/logo.svg'
import '../App.css'

const Home = () => {
    const [teams, setteams] = useState([])
    const [trackedPlayer, settrackedPlayer] = useState([])
    const [countPlayers, setcountPlayers] = useState(0)

    const showTeams = async () =>{
        const res = await getData('https://www.balldontlie.io/api/v1/teams')
        setteams(await res.data.slice(0,5))
    }
    const deletePlayer = (id) =>{
        const teamId = teams.findIndex(item => item.id === id);
        const arr = [...teams.slice(0,teamId),...teams.slice(teamId+1)]

        setteams(arr)
    }

  return (
   <Router>
        <Container>
        <Row>
            <Col md={{size: 3 , offset:1}}>
                <img className="logo" src={logo} alt="logo"/>
            </Col>
            <Col md={{size: 6, offset: 2}}>
                <Link to='/teams'><button color="primary" onClick={showTeams} className='btn nav_item'>Teams</button></Link>
                <Link to='/players'><button color="primary"  className='btn nav_item'>Players</button></Link>
                <Link to='/tournaments' ><button color="primary"  className='btn nav_item'>Tournaments</button></Link>
            </Col>   
        </Row>
        <Switch>
            <Route path='/teams'>
                <TeamsPage  deletePlayer={deletePlayer} teams={teams}/>
            </Route>
            <Route exact path='/players'> 
                <PlayersPage 
                settrackedPlayer={settrackedPlayer} 
                trackedPlayer={trackedPlayer} 
                deletePlayer={deletePlayer}
                countPlayers={countPlayers}
                setcountPlayers={setcountPlayers}
                teams={teams}/>
            </Route>
            <Route path='/tournaments'>
                <TournamentsPage  deletePlayer={deletePlayer} teams={teams}/>
            </Route>
        </Switch>
    </Container>
   </Router>
  )
}

export default Home
