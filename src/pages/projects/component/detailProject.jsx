import { Typography } from "@mui/material"
import { Col, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom"

const DetailProject = () => {
    const data = useLocation()
    return(
        <Row>
            <Col md="8" xs="12">
                <Typography variant="h4">Judul</Typography>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam eveniet dolores ea quo architecto quod molestiae? Id impedit quo, officia facilis ducimus dolorem veritatis, repellat nesciunt ipsa quam, consequatur fuga.</Typography>
            </Col>
            <Col md="4" xs="12">
                <Typography>Freamwork</Typography>
                <Typography></Typography>
            </Col>
        </Row>
    )
}

export default DetailProject;