import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { LangConfig } from '../../../language/langConfig';
import { DataSkills } from '../../../pages/profile/Utils/profileUtils';
import Item from 'antd/es/list/Item';

const ProfileDashboard = () => {
    const [motionko, setMotionko] = useState(1);
    const [isExit, setIsExit] = useState(false);
    const skill = DataSkills;
    const ls = LangConfig().dashboard;

    const counterMotion = () => {
        setIsExit(true);
        const counter = motionko + 1
        const timeout = setTimeout(() => {                
            setMotionko(counter);
        }, 10000)
        return () => clearTimeout(timeout);
    }

    return(
        <motion.div
            key={"profile"}
            className='dashboardContent'
            exit={{y: -50, opacity: 0}}
            transition={{ duration: 1.5, delay : 1 }}
            >
            <motion.div className='row'>
                <motion.div className='col-xs-4'
                    initial= {{x : 50, opacity: 0}}
                    animate = {{x: 0, opacity : 1}}
                    transition={{duration: 2}}
                >
                    <img src='/image/profile.jpg' className='rounded bordered shadow' style={{maxHeight: '240px', width: '240px'}}/>
                </motion.div>
                <motion.div className='col-xs-8 p-3'
                >
                        {(motionko === 1) &&(
                            <motion.p
                                key="1"
                                className='motionp'
                                initial= {{y : 50, opacity: 0}}
                                animate = {{y: 0, opacity : 1}}
                                transition={{duration: 2}}
                                exit={{y : 10, opacity: 0, transition: {duration : 2, ease: 'easeOut'}}}
                                onAnimationComplete={counterMotion}
                            >
                                {/* Saya Danny Anthonyo seorang junior developer .NET yang berdedikasi dalam mengembangkan aplikasi berbasis web menggunakan teknologi .NET. Saya memiliki pengetahuan tentang javascript, React JS, Jquery, bahasa pemograman C# dan kerangka Kerja ASP.Net. Saya telah mengikuti beberapa project pegembangan perangkat lunak menggunakan teknologi .Net */}
                                {ls.Profile.desc}
                            </motion.p>
                        )}
                        {(motionko === 2) && (
                            <motion.div>
                                <motion.p
                                    key="2"
                                    initial={{y: 10, opacity: 0}}
                                    animate = {{y : 0 , opacity : 1}}
                                    transition={{duration : 1, delay : 0.5}}
                                >
                                    {ls.p2}
                                </motion.p>
                                <motion.div className='row'
                                    initial={{y: 10, opacity: 0}}
                                    animate = {{y : 0 , opacity : 1}}
                                    transition={{duration : 1, delay : 5}}
                                >
                                    {skill.map((Item) => {
                                        return(                                            
                                            <motion.div className='col p-2 m-2 rounded border shadow'>
                                               <img style={{maxWidth: '50px', maxHeight: '50px'}} src={Item.src}></img>
                                            </motion.div>
                                        )
                                    })}
                                </motion.div>
                            </motion.div>
                        )}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default ProfileDashboard