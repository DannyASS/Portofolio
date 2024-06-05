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
            <Col md={{order : 'first', span : '6'}} xs={{order : 'last', span : '12'}}>
                <div>
                    <Row>
                        {data.map((item, indeks) => {
                            return(
                                <Col key={indeks} md={12} xs={6} onClick={() => handlePilih(indeks)} className={`p-2 rounded descProject ${pilih == indeks? 'dipilih' : 'shadow'}`}>        
                                        <h4 className="tittlePilih">{item.name}</h4>
                                        <Typography variant="content">{item.at}</Typography>
                                </Col>
                            )
                        })}
                    </Row>                    
                </div>
            </Col>
            <Col md={{order : 'last', span : '6'}} xs={{order : 'first', span : '12'}} className="p-2">
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
                            <h6>{ls.label9}</h6>
                            <Container className="lamaproject">
                                <p>{dataPilih?.lama}</p>
                            </Container>
                        </Row>
                    </Container>
                </div>
            </Col>
        </Row>
    )
}

export default DetailProject;