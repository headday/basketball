import React, { useState } from "react";
import {  Input, Button } from "reactstrap";
import { connect } from "react-redux";
import {  Redirect } from "react-router-dom";
import { authSucces } from "../../actions";
import { postData } from '../../service/service'
import "../../App.css";
const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const { authSucces } = props; //action
  const { auth } = props; // state
  const handleLoginChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      username,
      password
    }
    postData('http://localhost:4000/auth/login',data)
    .then((res) =>{
      if(res.token){
        authSucces(res.token)
        localStorage.token = res.token; 
      }else{
        seterror(true);
        setTimeout(() => {
          seterror(false);
        }, 5000);
      }
    })
    .catch((err) => {
      console.log(err);
    }
    );
    
  };
/*   if (auth) {
    return <Redirect to="/" />;
  } */
  return (
    <div className="login_section">
      <h3 className="login_label">Sign In</h3>
      <div className="login_form">
        <form onSubmit={handleSubmit}>
          <div className="login_block">
            <label className="login_block_main_label">
              <div className="login_block_label">Login</div>
              <Input
                type="text"
                name="login"
                placeholder="Your login"
                value={username}
                onChange={handleLoginChange}
              />
            </label>
          </div>
          <div className="login_block">
            <label className="login_block_main_label">
              <div className="login_block_label">Password</div>
              <Input
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
          </div>
          <div className="login_block">
            <div>{error === true ? "Invalid login or password" : ""}</div>
          </div>
          <div className="login_btns">
            <Button className="login_btn">Registration</Button>
            <Button className="login_btn">SingIn</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
const mapDispatchToProps = {
  authSucces,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
