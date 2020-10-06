import React,{useEffect} from 'react'
import { BrowserRouter as Router,useHistory} from "react-router-dom";
import { Card, Button,CardTitle, CardText} from 'reactstrap';

const PlayersDetails = (props) => {
    const {trackedPlayer,setactivePage} = props;
    const history = useHistory();

     useEffect(()=>{

        
    },[]); 
   
    const list =  trackedPlayer.map(elem =>{
        return (
            <li key={elem.id}>
                
                <Card body outline color="info">
                <CardTitle>{elem.first_name}   {elem.last_name}</CardTitle>
                <CardText>
                    Position {elem.position} <br/>
                    height_feet {elem.height_feet ? 'unkonow' : elem.height_feet} <br/>
                    height_inches {elem.height_inches  ? 'unkonow' : elem.height_inches}<br/>
                    weight_pounds {elem.weight_pounds ? 'unkonow' : elem.weight_pounds} <br/>

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
        <Router>
            
            {list}

        
           <Button onClick={()=>{history.push('/players'); setactivePage(true)}}>Back</Button>
        
        </Router>
      
    </>
  )
}

export default PlayersDetails
