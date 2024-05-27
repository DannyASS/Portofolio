import { motion } from 'framer-motion';
import { LangConfig } from '../../../language/langConfig';
const WelcomeTrans = () => {
  const ls = LangConfig().dashboard
    return (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{y: 50, opacity: 0 , delay : 1}}
          transition={{ duration: 1.5, delay : 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Selamat Datang! */}
            {`${ls.welcome} ${localStorage.getItem('data')}!`}
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {/* Enjoy Explore My CV... */}
            {ls.p1}
          </motion.p>
        </motion.div>
    )
}

export default WelcomeTrans;