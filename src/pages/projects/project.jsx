import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Col, Container, Row } from "react-bootstrap"
import { LangConfig } from "../../language/langConfig"
import { projectData } from "./Utils/projectUtils"
import './style.scss'

const MyProject = () => {
    const ls = LangConfig().commingSoon
    const dataProject = projectData
    return(
        <Container className="dashboardContent">
            <Container className="projectFont">
                <h3 className="pb-3">Perfesional Project</h3>
                <Row className="mt-2">
                    {dataProject.map((item, indeks) => {
                        return (
                            <Col className="mb-2" md="4" xs="12" key={indeks}>
                                <Card>
                                    <CardMedia 
                                        height={'340px'}
                                        component="img"
                                        image={item.gambar}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component={"div"}>
                                            {item.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button className="buttonProject" size="small">Go To Detail</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </Container>
    )
}

export default MyProject;