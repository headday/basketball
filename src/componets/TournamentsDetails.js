import React,{useState,useEffect} from 'react'
import {getData} from '../service/service'

const TournamentDetails = (props) => {
    const [detail, setdetail] = useState(
      {
      "id":1,
      "date":"2018-10-16T00:00:00.000Z",
      "home_team_score":105,
      "visitor_team_score":87,
      "season":2018,
      "period": 4,
      "status": "Final",
      "time": " ",
      "postseason": false,
      "home_team":{
        "id":2,
        "abbreviation":"BOS",
        "city":"Boston",
        "conference":"East",
        "division":"Atlantic",
        "full_name":"Boston Celtics",
        "name":"Celtics"
      },
      "visitor_team":{
        "id":23,
        "abbreviation":"PHI",
        "city":"Philadelphia",
        "conference":"East",
        "division":"Atlantic",
        "full_name":"Philadelphia 76ers",
        "name":"76ers"
      },
      }
    )
    const {gameId} = props;
    useEffect(()=>{
       fetch(`https://www.balldontlie.io/api/v1/games/${gameId}`)
       .then(res => res.json())
       .then(data =>  setdetail(data))
       .catch(err => console.log(err));
    },[])
  return (
    <div>    
      <h2>{detail.home_team.full_name} vs {detail.visitor_team.full_name}</h2>
    </div>
  )
}

export default TournamentDetails
