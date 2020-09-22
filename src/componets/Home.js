import React,{useState,useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardTitle, CardText,} from 'reactstrap';
import getData from '../service/service'
import logo from '../images/logo.svg'
import '../App.css'

const Home = () => {
    const [activeBtn, setactiveBtn] = useState(0)
    const [teams, setteams] = useState([])

    const showTeams = async () =>{
        const res = await getData('https://www.balldontlie.io/api/v1/teams')
        setteams(await res.data)
     
    }
     
            const teamItems = teams.map((elem,index) => {
                return (
                    <li key={elem.id}>
                        <Card body>
                        <CardTitle>{elem.name}</CardTitle>
                        <CardText>{elem.full_name}</CardText>
                                           
                        </Card> 
                    </li>
                )
            })     
        
  return (
    <Container>
        <Row>
            <Col md={{size: 3 , offset:1}}>
                <img className="logo" src={logo} alt="logo"/>
            </Col>
            <Col md={{size: 6, offset: 2}}>
                <button color="primary" onClick={showTeams} className='btn nav_item'>Teams</button>
                <button color="primary" onClick={()=> console.log(teams[0])}   className='btn nav_item'>Players</button>
                <button color="primary" className='btn nav_item'>Tournaments</button>
            </Col>
        </Row>
        <Row>
            <Col md={{size:3}}>
                
                    {teamItems}
                    
                
            
            </Col>
        </Row>
    </Container>
  )
}

export default Home
