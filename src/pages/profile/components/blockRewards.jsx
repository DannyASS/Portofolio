import { EmojiEvents, ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { DataPenghargaan } from "../Utils/profileUtils";
import { useState } from "react";
import { theme } from "../../../halpers/colors"

const BlockRewards = () => {
    const [reward, setReward] = useState()
    const data = DataPenghargaan;

    const handleClickRewards = (index) => {
        if(index == reward) return setReward(null)
        return setReward(index);
    }
    return(
        <Accordion className="mt-2">
                <AccordionSummary
                    expandIcon = {<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <EmojiEvents className="pt-2" />
                    <Typography variant="h6">
                        Riwayat Prestasi
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Row>
                        {data.map((item,index) => {
                            return(
                                <Col key={index} onClick={() =>handleClickRewards(index)} className={'tittleRewards rounded '+ (reward == index? 'tittleRewardsClick' : '')}>
                                    <EmojiEvents color={reward == index? 'primary' : ''}/>
                                    <Typography color={reward == index ? theme.palette.primary.dark : theme.palette.primary.main} variant={reward == index ? 'h6' : "button"} display="block" gutterBottom>
                                        {item.name}
                                    </Typography>
                                    <Typography color={reward == index? 'light' : ''} variant="caption" display="block" gutterBottom>
                                        {`(${item.tingkat})`}
                                    </Typography>
                                </Col>
                            )
                        })}
                    </Row>
                </AccordionDetails>
        </Accordion>
    )
}


export default BlockRewards;