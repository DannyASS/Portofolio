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
                <p className="card-text">Saya seorang junior developer .NET yang berdedikasi dalam mengembangkan aplikasi berbasis web menggunakan teknologi .NET. Saya memiliki pengetahuan tentang javascript, React JS, Jquery, bahasa pemograman C# dan kerangka Kerja ASP.Net. Saya telah mengikuti beberapa project pegembangan perangkat lunak menggunakan teknologi .Net</p>
                </div>
            </div>
        </Container>
    )
}

export default BlockPage;