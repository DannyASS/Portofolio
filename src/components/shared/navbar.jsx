import { Layout, Menu } from "antd"
import { Container } from "react-bootstrap"
import { convertObjectToArray } from "../../utils/router/objectRouter"
import { Language, Navigation, Widgets } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LangConfig, language } from "../../language/langConfig";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dataMenu = convertObjectToArray();
    const {Sider} = Layout
    const ls = LangConfig().language
    const LanguageData = language

    const handleChangeLanguage = (data) => {
        let codeLang = data;
        localStorage.removeItem('locale');
        localStorage.setItem('locale', codeLang);
        return window.location.reload();
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
        </Sider>
    )
}

export default Sidebar