import React,{useState,useEffect} from 'react'
import {getData,getStats} from '../service/service'
import { Card, Button, CardHeader, CardBody,CardTitle, CardText, Container,Row, Col } from 'reactstrap';
import Spinner from '../images/spinner.gif' 

const PlayersPage = (props) => {
  const [players, setplayers] = useState([])


  const {settrackedPlayer,trackedPlayer,setcountPlayers,countPlayers} = props

  const onTracked = (id) =>{
   // let res = trackedPlayer.findIndex((itemId => itemId === id))
    if(trackedPlayer.findIndex((itemId => itemId === id)) === -1){
      console.log(' not find')
      setcountPlayers(countPlayers + 1);
      settrackedPlayer([...trackedPlayer,id])
    } 

    console.log([...trackedPlayer,id])
    //console.log(res + 'res')
  
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
          <Button onClick={()=>onTracked(elem.id)}>Track player</Button>
        </CardBody>
     
      </Card>
    )
  })

  return (
    <>
      <Container>
        <Row>Tracked players {countPlayers}</Row>
        <Row>
          <Col className="players_list">
            {playersList}
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default PlayersPage
