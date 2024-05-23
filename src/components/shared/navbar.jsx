import { Layout, Menu } from "antd"
import { Container } from "react-bootstrap"
import { convertObjectToArray } from "../../utils/router/objectRouter"
import { Navigation, Widgets } from "@mui/icons-material";

const Sidebar = () => {
    const dataMenu = convertObjectToArray();
    const {Header, Sider} = Layout
    console.log("cek object :", dataMenu);
    return(
        <Sider className="sideBar">
            <div className="iconNav">
                <Widgets />
            </div>            
            <Menu theme="dark" mode="inline">
                {dataMenu.map((item)=> {
                    return(
                        <Menu.Item key={item.title} icon={item.icon}>{item.title}</Menu.Item>
                    )
                })}
            </Menu>
        </Sider>
    )
}

export default Sidebar