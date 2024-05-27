import { EmojiEvents, ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { DataPenghargaan } from "../Utils/profileUtils";
import { useEffect, useState } from "react";
import { theme } from "../../../halpers/colors"
import { LangConfig } from "../../../language/langConfig";

const BlockRewards = () => {
    const [reward, setReward] = useState();
    const [itemReward, setItemReward] = useState(null);
    const [show,setShow] = useState(false)
    const data = DataPenghargaan;
    const ls = LangConfig().profile;

    const handleClickRewards = (item,index, close = false) => {
        if(close) return setShow(!show);
        if(index == reward){
            setItemReward(null);
            return setReward(null)
        }
        setShow(true);
        setItemReward(item);
        return setReward(index);
    }

    useEffect(()=> {
        console.log('show : ', show);
    },[show])
    return(
        <>    
                        <Modal show={show}>
                            <Modal.Header>
                                <Typography variant="h5">{itemReward?.name}</Typography>
                            </Modal.Header>
                            <Modal.Body>
                                {itemReward?.desc}
                            </Modal.Body>  
                            <Modal.Footer>
                                <Button onClick={() => handleClickRewards(itemReward,reward, true)} variant="secondary">
                                    {/* Close */}
                                    {ls.button1}
                                </Button>
                            </Modal.Footer>
                        </Modal>
            <Accordion className="mt-2">
                    <AccordionSummary
                        expandIcon = {<ExpandMore />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <EmojiEvents className="pt-2" />
                        <Typography variant="h6">
                            {/* Riwayat Prestasi */}
                            {ls.title4}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Row>
                            {data.map((item,index) => {
                                return(
                                    <Col md={4} xs={12} key={index} onClick={() =>handleClickRewards(item,index)} className={'tittleRewards rounded '+ (reward == index? 'tittleRewardsClick' : '')}>
                                        <EmojiEvents color={reward == index? 'primary' : ''}/>
                                        <Typography className="tittle-rewards" color={reward == index ? theme.palette.primary.dark : theme.palette.primary.main} variant={reward == index ? 'h6' : "button"} display="block" gutterBottom>
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
        </>
    )
}


export default BlockRewards;