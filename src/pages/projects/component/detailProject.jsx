import { Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import '../style.scss'
import { LangConfig } from "../../../language/langConfig"

const DetailProject = () => {
    const ls = LangConfig().Project;
    const data = useLocation().state.data;
    const [pilih, setPilih] = useState(data? 0 : null);
    const [dataPilih, setDataPilih] = useState(data? data[0] : null);

    const handlePilih = (x) => {
        if(x == pilih){
            setDataPilih(null);
            return setPilih(null)
        }
        const datachose = data[x];
        console.log("data di pilih : ",datachose)
        setDataPilih(datachose)
        return setPilih(x);
    }

    useEffect(() => {
        console.log("state Navigate : ",data);
    },[])
    return(
        <Row className="projectFont">
            <Col md="7" xs="12">
                <div>
                    {data.map((item, indeks) => {
                        return(
                            <Row className="mt-3 mb-3 p-3" key={indeks}>
                                <Col onClick={() => handlePilih(indeks)} className={`p-2 rounded cardDesc descProject ${pilih == indeks? 'dipilih' : 'shadow'}`}>        
                                    <Typography variant="h4">{item.name}</Typography>
                                    <Typography variant="content">{item.at}</Typography>
                                </Col>
                            </Row>
                        )
                    })}                    
                </div>
            </Col>
            <Col md="5" xs="12" className="p-2">
                <div hidden={dataPilih? false : true}>                    
                    <Container className="p-2 shadow rounded cardDesc">        
                        <Row>
                            <h6>{ls.label3}</h6>
                            <p>{dataPilih?.desc}</p>
                        </Row>
                        <Row>
                            <h6>{ls.label5}</h6>
                            {dataPilih?.frameworks.map((Item) => {
                                return(
                                    <Col md={4} xs={4}>
                                        <img className="skills" src={Item.icon} />
                                        <p>{Item?.name}</p>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            <h6>{ls.label4}</h6>
                            <Container className="posisiData">
                                {dataPilih?.posisi.map((item) => {
                                    return(
                                        <p className="posisi">{item}</p>
                                    )
                                })}
                            </Container>
                        </Row>
                        <Row>
                            <h6>{dataPilih.lama}</h6>
                            <Container className="lamaproject">
                                <p>{dataPilih.lama}</p>
                            </Container>
                        </Row>
                    </Container>
                </div>
            </Col>
        </Row>
    )
}

export default DetailProject;