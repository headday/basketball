import React,{useState,useEffect} from 'react'
import {getData} from '../service/service'

const TournamentDetails = (props) => {
    const [detail, setdetail] = useState();
    const {game} = props; 
    useEffect(()=>{
       setdetail(game);
       console.log(game);
    },[])

  return (
    <>
        <h2>{detail.home_team} vs {detail.visitor_team}</h2>
        <div>{detail.season}</div>    
    </>
  )
}

export default TournamentDetails
