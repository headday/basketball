import React,{useState} from 'react'

import {getData,getStats} from '../service/service'
import { Card, Button, CardTitle, CardText, Col, Row} from 'reactstrap';
import '../App.css'

const TeamsPage = (props) => {
   
    const {deletePlayer,teams} = props
   
    const teamItems = teams.map((elem,index) => 
    {
        if(index > 5){
            return ''   
        }
        return (
            <li key={elem.id}>
                    <Card body>
                    <div className="team_elem">
                        <CardTitle>{elem.name}</CardTitle>
                        <Button close onClick={() => deletePlayer(elem.id)} />
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
