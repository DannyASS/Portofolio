import { Typography } from "@mui/material"
import { Container } from "react-bootstrap"
import { LangConfig } from "../../language/langConfig"

const MyProject = () => {
    const ls = LangConfig().commingSoon
    return(
        <Container className="dashboardContent">
            <Typography variant="h3">{ls}</Typography>
        </Container>
    )
}

export default MyProject;