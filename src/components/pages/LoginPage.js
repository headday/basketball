import React,{useState} from 'react'
import {Container,Input,Button,FormFeedback} from 'reactstrap'
import {connect} from 'react-redux'
import {useHistory,Redirect, Link} from "react-router-dom";
import {authSucces} from '../../actions'
import '../../App.css'
const LoginPage = (props) =>{
    const [login, setlogin] = useState("")
    const [password, setPassword] = useState("")
    const [error, seterror] = useState(false)
    const {authSucces} = props //action
    const {auth} = props // state
     const handleLoginChange = (event) =>{
        setlogin(event.target.value)
    } 
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
    } 
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(login == "test" && password == "123123"){
            authSucces({login:login,password:password})
            localStorage.auth = true
        }else{
           seterror(prev => !prev)
           setlogin("")
           setPassword("")
           setTimeout(() => {
               seterror(false)
           }, 5000);
        }
    }
    if(auth){
        return(
            <Redirect to="/"/>
        )
    }
    return(
        <div className="login_section">
            <h3 className="login_label">
                Sign In
            </h3>
            <div className="login_form">
                <form onSubmit={handleSubmit}>
                    <div className="login_block">
                        <label className="login_block_main_label">
                            <div className="login_block_label">Login</div>
                            <Input type="text" name="login" placeholder="Your login" value={login} onChange={handleLoginChange}/>
                        </label>
                    </div>
                    <div className="login_block">
                        <label className="login_block_main_label">
                            <div className="login_block_label">Password</div>
                            <Input type="password" name="password" placeholder="Your password" value={password} onChange={handlePasswordChange}/>
                        </label>
                    </div>
                    <div className="login_block">
                        <div>{error == true ? "Invalid login or password" : ""}</div>
                    </div>
                    <Button className="login_btn">SingIn</Button>
                </form>
                
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
	return{
		auth : state.auth
	}
}
const mapDispatchToProps={
	authSucces
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)