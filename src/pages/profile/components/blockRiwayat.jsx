import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import '../style.scss'
import { DataSkills } from "../Utils/profileUtils"

const BlockRiwayat = () => {
    const skills = DataSkills
    useEffect(() => {
        console.log(skills)
    },[])

    return(
        <div className="border shadow rounded p-3">
            <Typography variant="h5">Keahlian</Typography>
            <Row className="pt-2">
                {skills.map((item,index) => { 
                    return (
                        <Col className="mt-3" xs={4}>
                            <Card className="card_skills" style={{
                                width : '171.517px',
                                height : '260.7px'
                            }}>
                                <div className="pt-2">
                                    <img className="skills" src={item.src}></img>
                                </div>
                                <CardContent>
                                    <Typography>{item.name}</Typography>
                                    <Typography id={index} className="text-ellipsis" variant="body2" color="text.secondary">
                                        {item.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}


export default BlockRiwayat