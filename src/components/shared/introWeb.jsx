import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@mui/material';

const IntroAnimation = ({initialBerita}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Toggle visibility every 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isVisible) {        
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 5000);
        return () => clearTimeout(timeout);   
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, delay : 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Selamat Datang!
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Enjoy Explore My CV...
          </motion.p>
        </motion.div>
      )}
      {!isVisible && (
            <motion.div
                key={"list"}
                className='dashboardContent'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay : 1 }}
            >
                <motion.div className='row'>
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 5, delay: 6 }}
                    >
                        Aktifitas
                    </motion.h1>
                    {initialBerita.map((item, index) => {
                        return (
                            <motion.div 
                            className='col rounded shadow p-3 m-3 actionCol'
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 5, delay: (1.5 * index) }}
                            >
                                    <Typography variant='h6'>{item.name}</Typography>
                                    <Typography variant='caption'>{item.deskripsi}</Typography>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
