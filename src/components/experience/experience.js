import React from "react";
import { Row, Col, Card } from 'react-materialize';
import { fetchAPI } from '../../hocs/fetchAPI';
import { withLoading } from '../../hocs/withLoading';
import company_avatar from '../../images/factory.jpg';

const Experience = ({ data }) => {
  return (
    <Card>
      {
        data.experience.map((item) =>
          <Row>
            <Col s={2} m={2}>
              <img src={company_avatar} className="circle responsive-img" />
            </Col>

            <Col s={10} s={10}>
              <p><b>{item.responsibility} em <span className="grey darken-2 white-text"> {item.company} </span></b></p>
              <p>{item.period}</p>
              <p>{item.location} - {item.country}</p>
            </Col>
          </Row>
        )
      }
    </Card>
  );
};

const ExperienceLoading = withLoading(Experience);
export default fetchAPI(ExperienceLoading);