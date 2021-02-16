import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../service/service";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";
import Spinner from "../spinner/Spinner";
import { connect } from "react-redux";
import {
  playersLoaded,
  loadElems,
  trackedPlayerUpdate,
  countPlayersUpdate,
} from "../../actions";
const PlayersPage = (props) => {
  const {
    playersLoaded,
    loadElems,
    trackedPlayerUpdate,
    countPlayersUpdate,
  } = props; //actions
  const { players, loading, trackedPlayers, countPlayers } = props; //state elems
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getData("https://www.balldontlie.io/api/v1/players");
      playersLoaded(await res.data);
      loadElems(false);
    };
    fetchAPI();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onUnTracked = (elem) => {
    let res = trackedPlayers.findIndex((player) => player.id === elem.id);
    if (res !== -1) {
      countPlayersUpdate(countPlayers - 1);
      trackedPlayerUpdate([
        ...trackedPlayers.slice(0, res),
        ...trackedPlayers.slice(res + 1),
      ]);
    }
  };
  const onTracked = (elem) => {
    if (trackedPlayers.findIndex((player) => player.id === elem.id) === -1) {
      countPlayersUpdate(countPlayers + 1);
      trackedPlayerUpdate([...trackedPlayers, elem]);
    }
  };

  const playersList = players.map((elem) => {
    return (
      <Card className="player_card" key={elem.id}>
        <CardHeader>
          {elem.first_name} {elem.last_name}
        </CardHeader>
        <CardBody>
          <CardTitle>Team:{elem.team.name}</CardTitle>
          <CardText>Position: {elem.position}</CardText>
          <CardText>City:{elem.team.city} </CardText>
          <CardText>Division: {elem.team.division} </CardText>
          {trackedPlayers.findIndex((player) => player.id === elem.id) ===
          -1 ? (
            <Button color="primary" onClick={() => onTracked(elem)}>
              Track player
            </Button>
          ) : (
            <Button onClick={() => onUnTracked(elem)}>Tracked</Button>
          )}
        </CardBody>
      </Card>
    );
  });
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Container>
        <Row>
          <Col md={{ size: 3, offset: 9 }}>
            <Card
              body
              inverse
              style={{ backgroundColor: "#333", borderColor: "#333" }}
            >
              <CardTitle>Your tracked players</CardTitle>
              <CardText>{countPlayers}</CardText>
              <Link to="/players/tracked-players-list">
                <Button>Show list</Button>
              </Link>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="players_list">{playersList}</Col>
        </Row>
      </Container>
    </>
  );
};
const mapStateToProps = ({
  players,
  loading,
  trackedPlayers,
  countPlayers,
}) => {
  return {
    players,
    loading,
    trackedPlayers,
    countPlayers,
  };
};
const mapDispatchToProps = {
  playersLoaded,
  loadElems,
  trackedPlayerUpdate,
  countPlayersUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersPage);
