import React from 'react'
//import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import {authSucces} from '../../actions'

import '../../App.css'

const Home = (props) => {
  return (
    <h1>hello</h1>
  )
}
const mapStateToProps = ({auth}) =>{
	return{
		auth
	}
}
const mapDispatchToProps={
	authSucces
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
