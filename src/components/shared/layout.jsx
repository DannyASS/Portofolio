import { Col, Row } from "react-bootstrap"
import { Outlet, useOutlet } from "react-router-dom"
import Sidebar from "./navbar";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

const LayoutPage = () => {
    const getOutlet = useOutlet();
    return(
        <div>
            <Layout>            
                <Sidebar />                
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