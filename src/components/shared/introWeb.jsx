import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@mui/material';
import WelcomeTrans from './subComponent/welcome';
import ActivityTrans from './subComponent/Activity';
import ProfileDashboard from './subComponent/proDash';

const IntroAnimation = ({initialBerita}) => {
  const [isVisible, setIsVisible] = useState(1);
  const [counterTime, setCounterTime] = useState(0);
  const setTime = [5000, 10000, 5000]


  // Toggle visibility every 3 seconds
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsVisible(2);
  //   }, 2000);
  //   return () => clearTimeout(timeout);
  // }, []);

  useEffect(() => {
    let counter = isVisible + 1;
    if (isVisible < 5) {
        console.log("cek deh : ", counter)        
        const timeout = setTimeout(() => {
            if (counter % 2 == 1) {              
              setCounterTime(counterTime + 1)
            }
            setIsVisible(counter);
        }, (isVisible % 2 == 1? setTime[counterTime] : 3000));
        return () => clearTimeout(timeout);   

    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {(isVisible == 1) && (<WelcomeTrans />)}
      {(isVisible == 5) && (<ActivityTrans initialBerita={initialBerita}/>)}
      {(isVisible == 3) && (<ProfileDashboard />)}
    </AnimatePresence>
  );
};

export default IntroAnimation;
