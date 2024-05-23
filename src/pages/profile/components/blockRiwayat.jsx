import { Accordion, AccordionSummary, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import '../style.scss'
import { DataSkills } from "../Utils/profileUtils"
import { ExpandMore, Extension } from "@mui/icons-material"

const BlockRiwayat = () => {
    const skills = DataSkills
    useEffect(() => {
        console.log(skills)
    },[])

    return(
        <Accordion>
            <AccordionSummary
                expandIcon ={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Extension className="pt-2" />
                <Typography variant="h6">Keahlian</Typography>
            </AccordionSummary>
            <div className="border shadow rounded p-3">
                <Row className="pt-2">
                    {skills.map((item,index) => { 
                        return (
                            <Col className="mt-3 card_skills" xs={4}>
                                <Card style={{
                                    width : '171.517px',
                                    height : '260.7px'
                                }}>
                                    <CardContent>
                                        <div className="pt-2">
                                            <img className="skills" src={item.src}></img>
                                        </div>
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
        </Accordion>
    )
}


export default BlockRiwayat