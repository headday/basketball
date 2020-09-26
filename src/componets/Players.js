import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {getData,getStats} from '../service/service'
import PlayersDetails from './PlayersDetails'
import { Card, Button, CardHeader, CardBody,CardTitle, CardText, Container,Row, Col } from 'reactstrap';

const PlayersPage = (props) => {
  const [players, setplayers] = useState([])


  const {settrackedPlayer,trackedPlayer,setcountPlayers,countPlayers} = props
  const onUnTracked =(id)=>{
    let res = trackedPlayer.findIndex((itemId=> itemId === id))
    if(res !== -1){
      setcountPlayers(countPlayers - 1);
      settrackedPlayer([...trackedPlayer.slice(0,res),...trackedPlayer.slice(res+1)])
    }
  }
  const onTracked = (id) =>{
    if(trackedPlayer.findIndex((itemId => itemId === id)) === -1){
      setcountPlayers(countPlayers + 1);
      settrackedPlayer([...trackedPlayer,id])
    }
  }
  useEffect(()=>{
    const fetchAPI = async () => {
      const res = await getData('https://www.balldontlie.io/api/v1/players')
      setplayers(await res.data)
    };
    fetchAPI();
  },[]);
  const playersList = players.map((elem) =>{
    return(
      <Card className="player_card" key={elem.id}>
        <CardHeader>{elem.first_name} {elem.last_name}</CardHeader>
        <CardBody>
          <CardTitle>Team:{elem.team.name}</CardTitle>
          <CardText>Position: {elem.position}</CardText>
          <CardText>City:{elem.team.city} </CardText>
          <CardText>Division: {elem.team.division} </CardText>
          { trackedPlayer.findIndex((elemId) => elemId === elem.id) === -1
           ? <Button color="primary" onClick={()=>onTracked(elem.id)}>Track player</Button>
           :  <Button onClick={()=> onUnTracked(elem.id)}>Tracked</Button>
          }
        </CardBody>
     
      </Card>
    )
  })

  return (
    <>
      <Router>
      <Container>
        <Row>
        <Col md={{size:3,offset:9}}>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Your tracked players</CardTitle>
        <CardText>{countPlayers}</CardText>
        <Link to="/tracked-players-list"><Button>Show list</Button></Link>
      </Card>
        </Col>
        </Row>
       
        <Row>
          <Col className="players_list">
            {playersList}
          </Col>
        </Row>
        <Route path="/tracked-players-list">
           <PlayersPage trackedPlayer={trackedPlayer}/>
        </Route>
      </Container>
      </Router>
      
    </>
  )
}

export default PlayersPage
