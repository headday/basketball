import React,{useState,useEffect} from 'react'
import {getData,getStats} from '../service/service'
import { Card, Button, CardHeader, CardFooter, CardBody,CardTitle, CardText, Container,Row, Col } from 'reactstrap';
import Spinner from '../images/spinner.gif' 

const PlayersPage = () => {
  const [players, setplayers] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(()=>{

    const fetchAPI = async () => {
      const res = await getData('https://www.balldontlie.io/api/v1/players')
      setplayers(await res.data)
    };
    fetchAPI();
  },[]);
  const playersList = players.map((elem) =>{
    return(
      <Card key={elem.id}>
        <CardHeader>{elem.first_name}</CardHeader>
        <CardBody>
          <CardTitle>{elem.last_name}</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>{elem.position}</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
  })

  return (
    <>
      <Container>
        <Row>
          <Col md={{size:6,offset:3}}>
            {playersList}
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default PlayersPage
