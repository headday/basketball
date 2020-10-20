import React,{useEffect,useState} from 'react'
import { Card, Button, CardTitle, CardText, Col, Row} from 'reactstrap';
import {getData} from '../service/service'
import '../App.css'

const TeamsPage = () => {

    const [teams, setteams] = useState([])
    useEffect(() => {
        const showTeams = async () =>{
            const res = await getData('https://www.balldontlie.io/api/v1/teams')
            setteams(await res.data)
        }
        showTeams();
    },)

    const hideTeam = (id) =>{
        const teamId = teams.findIndex(item => item.id === id);
        const arr = [...teams.slice(0,teamId),...teams.slice(teamId+1)]
        setteams(arr)
    }
    const teamItems = teams.map((elem,index) => 
    {
        return (
            <li key={elem.id}>
                    <Card body>
                    <div className="team_elem">
                        <CardTitle>{elem.name}</CardTitle>
                        <Button close onClick={() => hideTeam(elem.id)} />
                    </div>
                        <CardText>{elem.full_name}</CardText>          
                    </Card> 
            </li>
        )
    })     
  return (
    <Row>
        <Col md={{size:6, offset:3}}>
                {teamItems}
        </Col>
    </Row>
  )
}

export default TeamsPage
