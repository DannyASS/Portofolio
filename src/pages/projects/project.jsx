import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Col, Container, Row } from "react-bootstrap"
import { LangConfig } from "../../language/langConfig"
import { dataMainProject, projectData } from "./Utils/projectUtils"
import './style.scss'
import { useNavigate } from "react-router-dom"
import { objectRouter } from "../../utils/router/objectRouter"

const MyProject = () => {
    const ls = LangConfig().Project
    const dataProject = dataMainProject
    const navigate = useNavigate()

    const handleGoToDetail = (data, indeks) => {
        navigate(objectRouter.projectDetail.path.replace('/:id', `/${indeks}`), {state : data})
    }

    return(
        <Container className="dashboardContent">
            <Container className="projectFont">
                <h3 className="pb-3">{ls.label1}</h3>
                <Row className="mt-2 rowProject">
                    {dataProject.map((item, indeks) => {
                        return (
                            <Col className="mb-2" key={indeks}>
                                <Card className="cardProject">
                                    <img src={item.gambar} className="imgCard" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component={"div"}>
                                            {item.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => handleGoToDetail(item,indeks)} className="buttonProject" size="small">{ls.label2}</Button>
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