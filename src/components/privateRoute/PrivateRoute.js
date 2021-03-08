import  React from  "react";
import { Route, Redirect } from  "react-router-dom";
const PrivateRoute = (props) => {
  const condition = localStorage.auth ? true : false;
  return (
    <>
      {condition ? <Route path={props.path} component={props.component}/> : <Redirect to="/auth"/>}
    </>
  )
}
export default PrivateRoute