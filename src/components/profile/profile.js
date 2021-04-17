import React from "react";
import { Row, Col, Card } from 'react-materialize';
import { fetchAPI } from '../../hocs/fetchAPI';
import { withLoading } from '../../hocs/withLoading';

const Profile = ({ data }) => {
  const { avatar_url, name, professional } = data;
  
  return (
    <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar_url} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5>{name}</h5>
        <p className="grey darken-2 white-text">{professional}</p>
      </Row>
    </Card>
  )
};

const ProfileLoading = withLoading(Profile);

export default fetchAPI(ProfileLoading);
