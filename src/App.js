import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  
} from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import TeamsPage from "./components/pages/Teams";
import PlayersPage from "./components/pages/Players";
import TournamentsPage from "./components/pages/Tournaments";
import LoginPage from "./components/pages/LoginPage";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import ProfilePage from "./components/pages/Profile";
import PlayersDetails from "./components/playerDetails/PlayersDetails";
import TournamentDetails from "./components/tournamentsDetails/TournamentsDetails";
import { authSucces } from "./actions";
import logo from "./images/logo.svg";
import "./App.css";

import Home from "./components/pages/Home";

function App(props) {
  const { authSucces, trackedPlayers } = props;
  useEffect(() => {
    const checkAuth = () => {
      if (localStorage.auth) {
        authSucces(localStorage.auth);
      }
    };
    checkAuth();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Router>
      <Container>
        <Row>
          <Col md={{ size: 3, offset: 1 }}>
            <Link to="/" exact>
              {" "}
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </Col>
          <Col md={{ size: 6, offset: 2 }}>
            <Link to="/teams">
              <button color="primary" className="btn nav_item">
                Teams
              </button>
            </Link>
            <Link to="/players">
              <button color="primary" className="btn nav_item">
                Players
              </button>
            </Link>
            <Link to="/tournaments">
              <button color="primary" className="btn nav_item">
                Tournaments
              </button>
            </Link>
            <Link to="/profile">
              <button color="primary" className="btn nav_item">
                Profile
              </button>
            </Link>
          </Col>
        </Row>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/teams" component={TeamsPage} />
          <Route exact path="/players" component={PlayersPage} />
          <Route path="/players/tracked-players-list">
            <PlayersDetails trackedPlayers={trackedPlayers} />
          </Route>
          <Route exact path="/tournaments" component={TournamentsPage} />
          <Route
            path="/tournaments/:id"
            component={TournamentDetails}
          />
          <Route path="/auth" component={LoginPage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
        </Switch>
      </Container>
    </Router>
  );
}
const mapStateToProps = ({ auth, trackedPlayers }) => {
  return {
    auth,
    trackedPlayers,
  };
};
const mapDispatchToProps = {
  authSucces,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
