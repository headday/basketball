import React,{useState,useEffect} from 'react'
import {getData}  from '../service/service';
import { Card, Button, CardTitle, CardText} from 'reactstrap';
import '../App.css'

const TournamentsPage = () => {
  const [games, setgames] = useState([]);
  const [modal, setModal] = useState(false);


  useEffect( ()=>{
    getGames();
  },[])
  const getGames = async () =>{
    const games = await getData('https://www.balldontlie.io/api/v1/games');
    console.log(games);
    setgames(games.data)
  }
  

  const toggle = () => setModal(!modal);

const gamesList = games.map(game => 
  <li key={game.id}>
      <Card body className="text-center">
        <CardTitle className="fw">{game.home_team.abbreviation} <span className="fw-none">VS</span> {game.visitor_team.abbreviation}</CardTitle>
        <CardText>{game.home_team_score} : {game.visitor_team_score}</CardText>
        <CardText>Status {game.status}</CardText>
        <Button color="primary" onClick={toggle}>Show details</Button>
      </Card>
  </li>
  )
  return (
    <div className='d-flex flex-wrap'>
      {gamesList}
    </div>
  
  )
}

export default TournamentsPage
