import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { LangConfig } from '../../../language/langConfig';

const ActivityTrans = ({initialBerita}) => {
    const ls = LangConfig().dashboard;
    return(
        <motion.div
                key={"list"}
                className='dashboardContent'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{y: 50, opacity: 0}}
                transition={{ duration: 1.5, delay : 1 }}
            >
                <motion.div className='row'>
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 5, delay: 5 }}
                    >
                        {/* Aktifitas */}
                        {ls.h1}
                    </motion.h1>
                    {initialBerita.map((item, index) => {
                        return (
                            <motion.div 
                            className='col rounded shadow p-3 m-3 actionCol'
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 5, delay: (1 * index) }}
                            >
                                    <Typography variant='h6'>{item.name}</Typography>
                                    <Typography variant='caption'>{item.deskripsi}</Typography>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
    )
}

export default ActivityTrans