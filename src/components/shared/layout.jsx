import { Col, Row } from "react-bootstrap"
import { Outlet, useOutlet } from "react-router-dom"
import Sidebar from "./navbar";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";

const LayoutPage = () => {
    const [dataOutlet, setDataOutlet] = useState(null)
    const getOutlet = useOutlet();

    useEffect(() => {
        if (getOutlet) {
            setDataOutlet(getOutlet.props.children.props.match.route)
        }
    },[getOutlet])

    console.log("outlet :", getOutlet)
    return(
        <div>
            <Layout>            
                {dataOutlet?.navbar && <Sidebar />}                
                <Layout>
                    <Content className="p-2 outlet" id="rooting">
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}


export default LayoutPage;