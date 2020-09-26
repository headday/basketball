import React,{useEffect,useState} from 'react'
import {getStats} from '../service/service';
import { Card, Button, CardHeader, CardBody,CardTitle, CardText, Container,Row, Col } from 'reactstrap';

const PlayersDetails = (props) => {
    const [playersList, setplayersList] = useState([]);
    const {trackedPlayer} = props;
    
    useEffect(()=>{
        const getPlayers = () =>{
            trackedPlayer.forEach(async element => {
                let stat =  await getStats(`https://www.balldontlie.io/api/v1/players/${element}`);
                setplayersList([...playersList,stat]);
            });
        }
        getPlayers();
        
    },[]);
   
    const list = playersList.map(elem =>{
        return (
            <Card body outline color="info">
                <CardTitle>{elem.first_name}   {elem.last_name}</CardTitle>
        <CardText>
            Position {elem.position} <br/>
            height_feet {elem.height_feet} <br/>
            height_inches {elem.height_inches}<br/>
            weight_pounds {elem.weight_pounds} <br/>

            team abbreviation {elem.team.abbreviation} <br/>
            City {elem.team.city}<br/>
            conference {elem.team.conference} <br/>
            division {elem.team.division} <br/>

            full name {elem.team.full_name} <br/>
            name {elem.team.name}<br/>
         

        </CardText>
            
      </Card>
        )
    })
  return (
    <>
    <Container>
        <Row>
            {list}
        </Row>
    </Container>
      
    </>
  )
}

export default PlayersDetails
