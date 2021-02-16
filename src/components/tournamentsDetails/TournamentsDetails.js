import React, { useState, useEffect } from "react";
import { Container, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { getData } from "../../service/service";
import Circle from "../circle/Circle";
import { connect } from "react-redux";
import { tournamentDetailsUpdate } from "../../actions";
const TournamentDetails = (props) => {
  const [loading, setloading] = useState(true);
  const { tournamentDetail, tournamentDetailsUpdate } = props;

  const { id } = props.match.params;

  const history = useHistory();

  useEffect(() => {
    const getGames = async () => {
      const games = await getData(
        `https://www.balldontlie.io/api/v1/games/${id}`
      );
      tournamentDetailsUpdate(games);
      setloading(false);
    };
    getGames();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Container>
      <div className="card_detail">
        <div className="card_title">
          <h2>{loading ? <Circle /> : tournamentDetail.home_team.full_name}</h2>{" "}
          vs
          <h2>
            {loading ? <Circle /> : tournamentDetail.visitor_team.full_name}
          </h2>
        </div>
        <div className="card_game_details">
          <div className="card_game_details_main">
            {loading ? (
              <Circle />
            ) : (
              <>
                <div>Datw {tournamentDetail.date}</div>
                <div>
                  Score {tournamentDetail.home_team_score} :{" "}
                  {tournamentDetail.home_team_score}
                </div>
                <div>Status {tournamentDetail.status}</div>
              </>
            )}
          </div>
          <div className="card_game_details_submain">
            {loading ? (
              <Circle />
            ) : (
              <div>
                <div className="card_game_title">
                  Home team <span>{tournamentDetail.home_team.full_name}</span>
                </div>
                <div>
                  Team division{" "}
                  <span>{tournamentDetail.home_team.division}</span>
                </div>
                <div>
                  <div className="card_game_title">
                    Home team{" "}
                    <span>{tournamentDetail.visitor_team.full_name}</span>
                  </div>
                  <div>
                    Team division{" "}
                    <span>{tournamentDetail.visitor_team.division}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Button
        color="secondary details_btn"
        onClick={() => history.push("/tournaments")}
      >
        Go back
      </Button>{" "}
    </Container>
  );
};
const mapStateToProps = ({ tournamentDetail }) => {
  return {
    tournamentDetail,
  };
};
const mapDispatchToProps = {
  tournamentDetailsUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)(TournamentDetails);
