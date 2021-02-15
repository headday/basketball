import React,{useEffect,useState} from 'react'
import { Card, Button, CardTitle, CardText, Col, Row} from 'reactstrap';
import Spinner from '../spinner/Spinner';
import {getData} from '../../service/service';
import {connect} from 'react-redux';
import {teamsLoaded,activePageSet,loadElems} from '../../actions';
import '../../App.css'

const TeamsPage = (props) => {
	const {teamsLoaded,activePageSet,loadElems} = props; ///actions
	const {teams,activePage,loading} = props;   //state elements

	
	
	useEffect(() => {
		const showTeams = async () =>{
			const res = await getData('https://www.balldontlie.io/api/v1/teams')
			teamsPages(await res.data);
			loadElems(false);
		}
		showTeams();
	},[])


	const teamsPages = (teams)=>{
		const arr = [];
		let prev = 0
		for (let i = 5; i < teams.length; i+=5) {
			let team = teams.slice(prev,i);
			prev = i;
			arr.push(team);
		}
		teamsLoaded(arr);
	}


	const navItems = teams.map((elem,index) => {
		if(activePage === index){
			return <Button color='primary' onClick={()=> activePageSet(index)}>{index+1}</Button>
		}
		return(
			
			<Button onClick={()=> activePageSet(index)}>{index+1}</Button>
		)
	})
  
	let teamItems = teams[activePage].map(elem=>{
			return (
				<li key={elem.id}>
					<Card body>
					<div className="team_elem">
						<CardTitle>{elem.name}</CardTitle>
					</div>
						<CardText>{elem.full_name}</CardText>   
					</Card> 
				</li>
			)
		}) 
	
	if(loading){
		return <Spinner/>
	}
	return (
		<Row>
			<Col md={{size:6, offset:3}}>
					{teamItems}
				<div className='nav_elems'>
					<Button onClick={()=>activePage === 0 ? activePageSet(activePage) : activePageSet(activePage-1)}>Previous page</Button>
					{navItems}
					<Button onClick={()=>activePage === 4 ? activePageSet(activePage) : activePageSet(activePage+1)}>Next page</Button>
				</div>
			</Col>
		
		</Row>
	)  
}
const mapStateToProps = (state) =>{
	return{
		teams : state.teams,
		activePage : state.activePage,
		loading : state.loading
	}
}
const mapDispatchToProps = {
  teamsLoaded,
  activePageSet,
  loadElems
}
export default connect(mapStateToProps,mapDispatchToProps)(TeamsPage); 
