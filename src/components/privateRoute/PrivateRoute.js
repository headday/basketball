import  React from  "react";
import { Route, Redirect } from  "react-router-dom";
import {} from '../../actions'

const PrivateRoute = (props) => {
    const condition = localStorage.auth ? true : false;
  return (
    <>
      {condition ? <Route path={props.path} component={props.component}/> : <Redirect to="/login"/>}
    </>
  )
}
/* {condition ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) : 
        (<Redirect  to="/page/login"  />)} */

export default PrivateRoute