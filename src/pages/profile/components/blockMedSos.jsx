import { ExpandMore, Public } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { DataMedSos } from "../Utils/profileUtils";
import { Link } from "react-router-dom";
import { useState } from "react";
import EmailEngine from "../../../components/partial/emailEngine";
import { LangConfig } from "../../../language/langConfig";

const BlockMedSos = () => {
    const ls = LangConfig().profile
    const data = DataMedSos;
    const [stateEmail, setStateEmail] = useState(false);
    
    const handlingEmail = (data) => {
        if(data.name == ls.medSos.name4) return setStateEmail(true);
    }

    const handlingClose = (data) => {
        if(data == null) return null;
        return setStateEmail(data)
    }

    return(
        <div>
            <EmailEngine stateEmail={stateEmail} callback={handlingClose}/>
            <Accordion className="mt-2">
                    <AccordionSummary
                        expandIcon = {<ExpandMore />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Public className="pt-2" />
                        <Typography variant="h6">
                            {/* Media Sosial */}
                            {ls.title6}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Row>
                            {data.map((item) => {
                                return(
                                    <Col key={item.name} className="Medsos">
                                        <Link onClick={() => handlingEmail(item)} className="linkMedsos" to={item.link ? item.link : null }>
                                            {item.icon}
                                            <Typography variant="button" display="block" gutterBottom>
                                                {item.name}
                                            </Typography>
                                            {/* <Typography variant="caption" display="block" gutterBottom>
                                                {`(${item.akun})`}
                                            </Typography> */}
                                        </Link>
                                    </Col>
                                )
                            })}
                        </Row>
                    </AccordionDetails>
            </Accordion>
        </div>
    )
}


export default BlockMedSos;