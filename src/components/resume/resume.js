import React from "react";
import { Card, Row, Col } from 'react-materialize';
import { fetchAPI } from '../../hocs/fetchAPI';
import { withLoading } from '../../hocs/withLoading';

const Resume = ({ data }) => {
    return (
        <Card>
            {
                data.resume.map((item) =>
                    <Row>
                        <Col s={10} s={10}>
                            <p><b>{item.key}</b></p>
                            <p>{item.value}</p>
                        </Col>
                    </Row>
                )
            }
        </Card>
    );
};

const ResumeLoading = withLoading(Resume);
export default fetchAPI(ResumeLoading);