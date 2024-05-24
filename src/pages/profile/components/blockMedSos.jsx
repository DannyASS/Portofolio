import { ExpandMore, Public } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { DataMedSos } from "../Utils/profileUtils";

const BlockMedSos = () => {
    const data = DataMedSos;
    return(
        <Accordion className="mt-2">
                <AccordionSummary
                    expandIcon = {<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Public className="pt-2" />
                    <Typography variant="h6">
                        Media Sosial
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Row>
                        {data.map((item) => {
                            return(
                                <Col>
                                    {item.icon}
                                    <Typography variant="button" display="block" gutterBottom>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        {`(${item.akun})`}
                                    </Typography>
                                </Col>
                            )
                        })}
                    </Row>
                </AccordionDetails>
        </Accordion>
    )
}


export default BlockMedSos;