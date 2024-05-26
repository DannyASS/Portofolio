import { motion } from 'framer-motion'
import { useState } from 'react'
import { LangConfig } from '../../../language/langConfig';

const ProfileDashboard = () => {
    const [motionko, setMotionko] = useState(1);
    const [isExit, setIsExit] = useState(false);
    const ls = LangConfig().dashboard;

    const counterMotion = () => {
        setIsExit(true);
        const timeout = setTimeout(() => {        
            setMotionko(motionko + 1);
        },1000)
        setIsExit(false);
        return () => clearTimeout(timeout);
    }
    return(
        <motion.div
            key={"profile"}
            className='dashboardContent'
            exit={{y: -50, opacity: 0}}
            transition={{ duration: 1.5, delay : 1 }}
            >
            <motion.div className='row' style={{width : '60%'}}>
                <motion.div className='col-4'
                    initial= {{x : 50, opacity: 0}}
                    animate = {{x: -50, opacity : 1}}
                    transition={{duration: 5}}
                    onAnimationComplete={counterMotion}
                >
                    <img src='/image/profile.jpg' className='rounded bordered shadow' style={{maxHeight: '240px', width: '240px'}}/>
                </motion.div>
                <motion.div className='col-8'
                    style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex'}}
                >
                        {(motionko == 2 && !isExit) &&(
                            <motion.p
                                initial= {{y : 50, opacity: 0}}
                                animate = {{y: 0, opacity : 1, delay: 3}}
                                transition={{duration: 3}}
                                exit={{y : 10, opacity: 1}}
                            >
                                {/* Saya Danny Anthonyo seorang junior developer .NET yang berdedikasi dalam mengembangkan aplikasi berbasis web menggunakan teknologi .NET. Saya memiliki pengetahuan tentang javascript, React JS, Jquery, bahasa pemograman C# dan kerangka Kerja ASP.Net. Saya telah mengikuti beberapa project pegembangan perangkat lunak menggunakan teknologi .Net */}
                                {ls.Profile.desc}
                            </motion.p>
                        )}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default ProfileDashboard