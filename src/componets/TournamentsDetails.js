import React,{useState,useEffect} from 'react'
import { Container,Button } from 'reactstrap';
import { BrowserRouter as Router,useHistory} from "react-router-dom";
import Circle from './circle/Circle';
import {getData} from '../service/service'

const TournamentDetails = (props) => {
    const [detail, setdetail] = useState(
      {
      "id":1,
      "date":"2018-10-16T00:00:00.000Z",
      "home_team_score":105,
      "visitor_team_score":87,
      "status": "Final",
      "home_team":{
        "id":2,
        "division":"Atlantic",
        "full_name":"Boston Celtics",
      },
      "visitor_team":{
        "id":23,
        "division":"Atlantic",
        "full_name":"Philadelphia 76ers",
      },
      }
    )
    const [loading, setloading] = useState(true)
    const {gameId} = props;
    const history = useHistory();



    useEffect(()=>{
       fetch(`https://www.balldontlie.io/api/v1/games/${gameId}`)
       .then(res => res.json())
       .then(data =>  {setdetail(data); setloading(false)})
       .catch(err => console.log(err))
       
    },[])
  return (
    <Container>    
      <div className='card_detail'>
        <div className='card_title'><h2>{loading ? <Circle/> :  detail.home_team.full_name}</h2> vs <h2>{loading ? <Circle/> : detail.visitor_team.full_name}</h2> </div>
        <div className='card_game_details'>
          <div className='card_game_details_main'>
            { loading ? <Circle/> : <><div>Datw {detail.date}</div>
            <div>Score {detail.home_team_score} : {detail.home_team_score}</div>
            <div>Status {detail.status}</div></>}
          </div>
          <div className='card_game_details_submain'>
            {loading ? <Circle/> :<div>
              <div className='card_game_title'>Home team <span>{detail.home_team.full_name}</span></div>
              <div>Team division <span>{detail.home_team.division}</span></div>
              <div>
              <div className='card_game_title'>Home team <span>{detail.visitor_team.full_name}</span></div>
              <div>Team division <span>{detail.visitor_team.division}</span></div>
            </div>
            </div> }
            
           
          </div>
        </div>
      </div>
      <Button color="secondary details_btn" onClick={() => history.push('/tournaments')}>Go back</Button>{' '}
    </Container>
  )
}

export default TournamentDetails
