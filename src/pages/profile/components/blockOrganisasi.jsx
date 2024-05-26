import { ExpandMore, PeopleAlt } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { DataOrganisasi } from "../Utils/profileUtils";
import { LangConfig } from "../../../language/langConfig";

const BlockOrganisasi = () => {
    const data = DataOrganisasi;
    const ls = LangConfig().profile
    return(
        <Accordion className="mt-2">
                <AccordionSummary
                    expandIcon = {<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <PeopleAlt className="pt-2" />
                    <Typography variant="h6">
                        {/* Riwayat Organisasi */}
                        {ls.title5}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Row>
                        {data.map((item) => {
                            return(
                                <Col>
                                    <PeopleAlt />
                                    <Typography variant="button" display="block" gutterBottom>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
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


export default BlockOrganisasi;