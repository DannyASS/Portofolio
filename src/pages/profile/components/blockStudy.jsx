import { AccountBalance, ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { Col, Container, Row } from "react-bootstrap"
import { DataSekolah } from "../Utils/profileUtils"
import { theme } from "../../../halpers/colors"

const HistoryStudy = () => {
    const data = DataSekolah
    return (
        <Accordion className="mt-2">
                <AccordionSummary
                    expandIcon = {<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <AccountBalance className="pt-2" />
                    <Typography variant="h6">
                        Riwayat Sekolah
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Row>
                        {data.map((item) => {
                            return(
                                <Col>
                                    <AccountBalance className="pt-1" />
                                    <Typography variant="button" display="block" gutterBottom>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        {`(${item.jurusan})`}
                                    </Typography>
                                </Col>
                            )
                        })}
                    </Row>
                </AccordionDetails>
        </Accordion>
    )
}

export default HistoryStudy