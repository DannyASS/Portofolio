import { Container, Typography } from "@mui/material"
import IntroAnimation from "../../components/shared/introWeb";
import { Berita } from "./utils/dashboardUtils";

const DashboardPage = () => {
    const dataBerita = Berita
    return(
        <Container>
            <IntroAnimation initialBerita={dataBerita} />
        </Container>
    )
}


export default DashboardPage;