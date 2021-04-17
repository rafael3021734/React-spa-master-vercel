import React from "react";
import { Row, Col, Card } from 'react-materialize';
import { fetchAPI } from '../../hocs/fetchAPI';
import { withLoading } from '../../hocs/withLoading';
import company_avatar from '../../images/academic.png';

const Academic = ({ data }) => {
  return (
    <Card>
      {
        data.academic.map((item) =>
          <Row>
            <Col s={2} m={2}>
              <img src={company_avatar} className="circle responsive-img" />
            </Col>

            <Col s={10} s={10}>
              <p><b>{item.course} em <span className="grey darken-2 white-text"> {item.institution} </span></b></p>
              <p>{item.period}</p>
            </Col>
          </Row>
        )
      }
    </Card>
  );
};

const AcademicLoading = withLoading(Academic);
export default fetchAPI(AcademicLoading);