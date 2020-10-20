import React,{useEffect,useState} from 'react'
import { Card, Button, CardTitle, CardText, Col, Row} from 'reactstrap';
import Spinner from './spinner/Spinner';
import {getData} from '../service/service'
import '../App.css'

const TeamsPage = () => {
    const [teamsOnPage, setteamsOnPage] = useState([[]])
    const [activePage, setactivePage] = useState(0);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        const showTeams = async () =>{
            const res = await getData('https://www.balldontlie.io/api/v1/teams')
            teamsPages(await res.data);
            setloading(false);
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
        setteamsOnPage(arr);
    }
    const navItems = teamsOnPage.map((elem,index) => {
        if(activePage === index){
            return <Button color='primary' onClick={()=> setactivePage(index)}>{index+1}</Button>
        }
        return(
            
            <Button onClick={()=> setactivePage(index)}>{index+1}</Button>
        )
    })
  
    let teamItems = teamsOnPage[activePage].map(elem=>{
            return (
                <li key={elem.id}>
                    <Card body>
                    <div className="team_elem">
                        <CardTitle>{elem.name}</CardTitle>
                    </div>
                        <CardText>{elem.full_name}</CardText>
                        <button onClick={()=>console.log(teamsOnPage)}>click</button>          
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
                 <Button onClick={()=>activePage === 0 ?setactivePage(activePage) : setactivePage(activePage-1)}>Previous page</Button>
                {navItems}
                <Button onClick={()=>activePage === 4 ?setactivePage(activePage) : setactivePage(activePage+1)}>Next page</Button>
            </div>
        </Col>
    </Row>
  )
}

export default TeamsPage
