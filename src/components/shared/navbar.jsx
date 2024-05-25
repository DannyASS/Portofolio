import { Layout, Menu } from "antd"
import { Container } from "react-bootstrap"
import { convertObjectToArray } from "../../utils/router/objectRouter"
import { Navigation, Widgets } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dataMenu = convertObjectToArray();
    const {Sider} = Layout
    console.log("cek object :", dataMenu);
    return(
        <Sider collapsed={collapsed} className="sideBar">
            <div className="iconNav" onClick={() => setCollapsed(!collapsed)}>
                <img className="logoDas" src="/image/programmer.png"/>
            </div>            
            <Menu theme="dark">
                {dataMenu.map((item)=> {
                    return(
                        <Menu.Item key={item.title} icon={item.icon}>
                            <Link className="linkMenu" to={item.path}>{item.title}</Link>
                        </Menu.Item>
                    )
                })}
            </Menu>
        </Sider>
    )
}

export default Sidebar