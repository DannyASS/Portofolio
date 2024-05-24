import { Layout, Menu } from "antd"
import { Container } from "react-bootstrap"
import { convertObjectToArray } from "../../utils/router/objectRouter"
import { Navigation, Widgets } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const dataMenu = convertObjectToArray();
    const {Header, Sider} = Layout
    console.log("cek object :", dataMenu);
    return(
        <Sider className="sideBar">
            <div className="iconNav">
                <Widgets />
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