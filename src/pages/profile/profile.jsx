// File: src/components/ProfilePage.jsx

import React from 'react';
import { Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import BlockPage from './components/blockUtama';
import BlockRiwayat from './components/blockRiwayat';
import HistoryStudy from './components/blockStudy';
import BlockRewards from './components/blockRewards';
import BlockOrganisasi from './components/blockOrganisasi';

const ProfilePage = () => {
  return (
        <Row>
            <Col>
                <BlockPage />
            </Col>
            <Col>
                <BlockRiwayat />
                <HistoryStudy />
                <BlockRewards />
                <BlockOrganisasi />
            </Col>
        </Row>
  );
};

export default ProfilePage;
