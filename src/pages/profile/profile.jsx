// File: src/components/ProfilePage.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import BlockPage from './components/blockUtama';
import BlockRiwayat from './components/blockRiwayat';
import HistoryStudy from './components/blockStudy';
import BlockRewards from './components/blockRewards';
import BlockOrganisasi from './components/blockOrganisasi';
import BlockMedSos from './components/blockMedSos';
import { motion, AnimatePresence } from 'framer-motion'

const ProfilePage = () => {
  return (
        <Row>
            <Col>
                <BlockPage />
            </Col>
            <Col>
                <AnimatePresence>
                    <motion.div
                        key={1}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: (0.5 * 1) }}
                    >                
                        <BlockRiwayat />
                    </motion.div>
                    <motion.div
                        key={2}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: (0.5 * 2) }}
                    >                
                        <HistoryStudy />
                    </motion.div>
                    <motion.div
                        key={3}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: (0.5 * 3) }}
                    >                
                        <BlockRewards />
                    </motion.div>
                    <motion.div
                        key={4}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: (0.5 * 4) }}
                    >                
                        <BlockOrganisasi />
                    </motion.div>
                    <motion.div
                        key={5}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: (0.5 * 5) }}
                    >                
                        <BlockMedSos />
                    </motion.div>
                </AnimatePresence>
            </Col>
        </Row>
  );
};

export default ProfilePage;
