import React from "react";
import { Row, Col } from 'react-materialize';
import Profile from '../profile/profile'
import Resume from '../resume/resume'
import Experience from '../experience/experience'
import Academic from '../academic/academic'

const infoApiURL = 'https://run.mocky.io/v3/d9afd068-27bf-4ba9-8d17-7d85c7d2ff36';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <Profile apiURL={infoApiURL}/>
    </Col>
    <Col m={8} s={12}>

        <h5 className="subtitle">Resumo</h5>
        <Resume apiURL={infoApiURL}/>

        <h5 className="subtitle">Experiência</h5>
        <Experience  apiURL={infoApiURL}/>  
        
        <h5 className="subtitle">Formação Acadêmica</h5>
        <Academic  apiURL={infoApiURL}/>  
    </Col>
  </Row>
);

export default Home;
