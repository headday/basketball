import React,{useEffect} from 'react'
import { Card, Button,CardTitle, CardText} from 'reactstrap';

const PlayersDetails = (props) => {
    const {trackedPlayers} = props;


     useEffect(()=>{

        
    },[]); 
   
    const list =  trackedPlayers.map(elem =>{
        return (
            <li key={elem.id}>
                
                <Card body outline color="info">
                <CardTitle>{elem.first_name}   {elem.last_name}</CardTitle>
                <CardText>
                    Position {elem.position} <br/>
                    height_feet {elem.height_feet ? 'unknow' : elem.height_feet} <br/>
                    height_inches {elem.height_inches  ? 'unknow' : elem.height_inches}<br/>
                    weight_pounds {elem.weight_pounds ? 'unknow' : elem.weight_pounds} <br/>

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
        <div className='player_details'></div>
    </>
  )
}

export default PlayersDetails
