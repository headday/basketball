import React, { useState, useEffect } from "react";
import { getData } from "../../service/service";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import Spinner from "../spinner/Spinner";
import "../../App.css";

const TournamentsPage = () => {
  const [games, setgames] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getGames();
  }, []);
  const getGames = async () => {
    const games = await getData("https://www.balldontlie.io/api/v1/games");
    setgames(games.data);
    setloading(false);
  };
  const gamesList = games.map((game) => (
    <li key={game.id}>
      <Card body className="text-center m-1">
        <CardTitle className="fw">
          {game.home_team.abbreviation} <span className="fw-none">VS</span>{" "}
          {game.visitor_team.abbreviation}
        </CardTitle>
        <CardText>
          {game.home_team_score} : {game.visitor_team_score}
        </CardText>
        <CardText>Status {game.status}</CardText>
        <Link to={`/tournaments/${game.id}`}>
          <Button color="primary">
            Show details
          </Button>
        </Link>
      </Card>
    </li>
  ));
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="d-flex flex-wrap">
        {gamesList}
    </div>
  );
};

export default TournamentsPage;
