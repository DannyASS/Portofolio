import { Layout, Menu } from "antd"
import { Button, Container } from "react-bootstrap"
import { convertObjectToArray } from "../../utils/router/objectRouter"
import { Language, Logout, Navigation, Widgets } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LangConfig, language } from "../../language/langConfig";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dataMenu = convertObjectToArray();
    const {Sider} = Layout
    const ls = LangConfig().language
    const LanguageData = language
    const navigate = useNavigate();

    const handleChangeLanguage = (data) => {
        let codeLang = data;
        localStorage.removeItem('locale');
        localStorage.setItem('locale', codeLang);
        return window.location.reload();
    }

    const hanldeLogout = () => {
        localStorage.removeItem('data')
        localStorage.setItem('locale', 'id')
        window.location.reload();
    }

    return(
        <Sider collapsed={collapsed} className="sideBar">
            <div className="iconNav" onClick={() => setCollapsed(!collapsed)}>
                <img className="logoDas" src="/image/programmer.png"/>
            </div>            
            <Menu theme="dark">
                {dataMenu.filter((item) => item.hideMenu == false).map((item)=> {
                    return(
                        <Menu.Item key={item.title} icon={item.icon}>
                            <Link className="linkMenu" to={item.path}>{item.title}</Link>
                        </Menu.Item>
                    )
                })}
                <Menu.SubMenu
                    key={"language"}
                    icon={<Language />}
                    title={ls.title1}
                >
                    {LanguageData.map((item) => {
                        return (
                            <Menu.Item onClick={() => handleChangeLanguage(item.code)} key={item.code}>
                                {item.name}
                            </Menu.Item>
                        )
                    })}
                </Menu.SubMenu>
            </Menu>
            <Button onClick={hanldeLogout} id="logout"><Logout style={{width : '80%'}}/></Button>
        </Sider>
    )
}

export default Sidebar