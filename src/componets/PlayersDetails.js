import React,{useEffect,useState} from 'react'
import {getStats} from '../service/service';
import { Card, Button, CardHeader, CardBody,CardTitle, CardText, Container,Row, Col } from 'reactstrap';

const PlayersDetails = (props) => {
    
    const {trackedplayersList} = props;

    
     useEffect(()=>{
        const players = [];
    },[]); 
   
    const list =  trackedplayersList.map(elem =>{
        return (
            <li key={elem.id}>
                
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
            </li>
        )
    })  
  return (
    <>

        {list}

        <Button onClick={()=> console.log()}>asasd</Button>
      
    </>
  )
}

export default PlayersDetails
