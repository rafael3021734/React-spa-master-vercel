import React from "react";
import { Row, Col, CardPanel, Icon } from 'react-materialize';
import gitHub from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import skype from '../../images/skype.svg'
import twitter from '../../images/twitter.svg';

const Contact = () => (
  <Row>
    <Col>
      <h5>Contato</h5>
      <Row>
        <Col s={12} m={5}>
          <CardPanel className="teal lighten-4 black-text">
            <Row>
              <Col>
              <Row>
                <h5><b>Rafael dos Santos Ferreira</b></h5>
                </Row>
                <Row>
                  <Icon left>email</Icon> rafael_santospg@yahoo.com.br
                </Row>
                <Row>
                  <Icon left>phone</Icon> +55 11 969971614
                </Row>
                <Row>
                  <Icon left>location_on</Icon> São Paulo - Brasil
                </Row>
              </Col>
            </Row>
            <Row>
              <Col s={3}>
                <a target='_blank' href='https://www.linkedin.com/in/rafael-dos-santos-ferreira-163a3a70/'>
                  <img src={linkedin} className="circle responsive-img" />
                </a>
              </Col>
              <Col s={3}>
                <a target='_blank' href='https://github.com/rafael3021734'>
                  <img src={gitHub} className="circle responsive-img" />
                </a>
              </Col>
              <Col s={3}>
                <a target='_blank' href='https://join.skype.com/invite/Ar7CyRSxgmDC'>
                  <img src={skype} className="circle responsive-img" />
                </a>
              </Col>
              <Col s={3}>
                <a target='_blank' href='https://twitter.com/Rafael_engineer'>
                  <img src={twitter} className="circle responsive-img" />
                </a>
              </Col>
            </Row>
          </CardPanel>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Contact;
