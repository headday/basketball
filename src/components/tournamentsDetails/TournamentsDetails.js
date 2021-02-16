import React, { useState, useEffect } from "react";
import { Container, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import Circle from "../circle/Circle";
const TournamentDetails = (props) => {
  const [detail, setdetail] = useState({});
  const [loading, setloading] = useState(true);
    
  const { id } = props.match.params;

  const history = useHistory();

  useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/games/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setdetail(data);
        setloading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <div className="card_detail">
        <div className="card_title">
          <h2>{loading ? <Circle /> : detail.home_team.full_name}</h2> vs
          <h2>{loading ? <Circle /> : detail.visitor_team.full_name}</h2>
        </div>
        <div className="card_game_details">
          <div className="card_game_details_main">
            {loading ? (
              <Circle />
            ) : (
              <>
                <div>Datw {detail.date}</div>
                <div>
                  Score {detail.home_team_score} : {detail.home_team_score}
                </div>
                <div>Status {detail.status}</div>
              </>
            )}
          </div>
          <div className="card_game_details_submain">
            {loading ? (
              <Circle />
            ) : (
              <div>
                <div className="card_game_title">
                  Home team <span>{detail.home_team.full_name}</span>
                </div>
                <div>
                  Team division <span>{detail.home_team.division}</span>
                </div>
                <div>
                  <div className="card_game_title">
                    Home team <span>{detail.visitor_team.full_name}</span>
                  </div>
                  <div>
                    Team division <span>{detail.visitor_team.division}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Button
        color="secondary details_btn"
        onClick={() => history.goBack()}
      >
        Go back
      </Button>{" "}
    </Container>
  );
};

export default TournamentDetails;
