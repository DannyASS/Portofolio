import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FormLogin from './components/formLogin';
import './style.scss'
import { LangConfig } from '../../language/langConfig';

const LoginPage = () => {
const ls = LangConfig().login
  return (
        <div>
            <Row className='loginContent' style={{marginLeft: '0px'}}>
                <Col className='loginCol border rounded shadow' xs={12}>                
                    <Row>
                        <h1 className='h2Login'>{ls.title1}</h1>
                    </Row>
                    <Row>                    
                        <FormLogin />
                    </Row>
                </Col>
            </Row>
        </div>
  );
};

export default LoginPage;