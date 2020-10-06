import React,{useState,useEffect} from 'react'
import {getData}  from '../service/service';
import { Card, Button, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
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
          <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <b>Look at the top right of the page/viewport!</b><br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
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
