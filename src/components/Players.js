import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import {getData} from '../service/service'
import PlayersDetails from './PlayersDetails'
import { Card, Button, CardHeader, CardBody,CardTitle, CardText, Container,Row, Col } from 'reactstrap';
import Spinner from './spinner/Spinner'

const PlayersPage = (props) => {
  const [players, setplayers] = useState([])
  const [loading, setloading] = useState(true);
  const [playerDetailShow, setplayerDetailShow] = useState(false)
  const {settrackedPlayer,trackedPlayer,setcountPlayers,countPlayers} = props;

  
  const onUnTracked =(elem)=>{
    let res = trackedPlayer.findIndex((player=> player.id === elem.id))
    if(res !== -1){
      setcountPlayers(countPlayers - 1);
      settrackedPlayer([...trackedPlayer.slice(0,res),...trackedPlayer.slice(res+1)])
    }
  }
  const onTracked = (elem) =>{

    if(trackedPlayer.findIndex((player => player.id === elem.id)) === -1){
      setcountPlayers(countPlayers + 1);
      settrackedPlayer([...trackedPlayer,elem])
    }
  }
  useEffect(()=>{
    const fetchAPI = async () => {
      const res = await getData('https://www.balldontlie.io/api/v1/players')
      
      setplayers(await res.data)
      setloading(false);
      
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
          { trackedPlayer.findIndex((player) => player.id === elem.id) === -1
           ? <Button color="primary" onClick={()=>onTracked(elem)}>Track player</Button>
           :  <Button onClick={()=> onUnTracked(elem)}>Tracked</Button>
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
            {playerDetailShow ? <Link to='/players'> <Button onClick={()=>setplayerDetailShow(false)}>Back</Button></Link>  : <Link to="/players/tracked-players-list"><Button onClick={()=>setplayerDetailShow(true)}>Show list</Button></Link> }
            
          </Card>
        </Col>
        </Row>

        <Row>
          <Col className="players_list">
                {loading === true
                ? <Spinner/>
                :<>
                <Route path='/players' exact>
                    {playersList}
                  </Route>
                  <Route path="/players/tracked-players-list">
                    <PlayersDetails  trackedPlayer={trackedPlayer}/>
                  </Route>
                </>}
          </Col>
        </Row>
        <Row>
        </Row>
       
      </Container>
      </Router>
      
    </>
  )
}

export default PlayersPage
