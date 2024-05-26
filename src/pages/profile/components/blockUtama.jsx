import { Container, Typography } from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.scss'
import { LangConfig } from "../../../language/langConfig";

const BlockPage = () => {
    const ls = LangConfig().profile
    return(
        <Container className="border shadow p-3 rounded">
            <div>
                <img className='image' src="/image/profile.jpg" alt="" />
            </div>
            <Typography variant="h3" component="h1" gutterBottom>
                {/* My Profile */}
                {ls.title1}
            </Typography>
            <div className="card shadow border">
                <div className="card-body">
                <h5 className="card-title">Danny Anthonyo Sattu Sailo</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {/* Software Engineer */}
                    {ls.descProf}
                </h6>
                </div>
            </div>
        </Container>
    )
}

export default BlockPage;