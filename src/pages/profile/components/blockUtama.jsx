import { Container, Typography } from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.scss'

const BlockPage = () => {
    return(
        <Container className="border shadow p-3 rounded">
            <div>
                <img className='image' src="/image/profile.jpg" alt="" />
            </div>
            <Typography variant="h3" component="h1" gutterBottom>
                My Profile
            </Typography>
            <div className="card shadow border">
                <div className="card-body">
                <h5 className="card-title">Danny Anthonyo Sattu Sailo</h5>
                <h6 className="card-subtitle mb-2 text-muted">Software Engineer</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </Container>
    )
}

export default BlockPage;