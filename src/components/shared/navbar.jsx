import { Layout, Menu } from "antd"
import { Button, Container, Modal } from "react-bootstrap"
import { convertObjectToArray } from "../../utils/router/objectRouter"
import { Language, Logout, Navigation, Widgets } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LangConfig, language } from "../../language/langConfig";
import { Typography, useMediaQuery } from "@mui/material";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const dataMenu = convertObjectToArray();
    const {Sider} = Layout
    const ls = LangConfig().language
    const LanguageData = language
    const [show, setShow] = useState(false)
    const isMobile = useMediaQuery('(max-width: 768px)')

    const handleChangeLanguage = (data) => {
        let codeLang = data;
        localStorage.removeItem('locale');
        localStorage.setItem('locale', codeLang);
        return window.location.reload();
    }

    const hanldeLogout = () => {
        localStorage.removeItem('data')
        localStorage.setItem('locale', 'id')
        setShow(false)
        window.location.reload();
    }

    const logoutModal = () => {
        return setShow(true)
    }

    return(
        <Sider collapsed={(isMobile? true : collapsed)} className="sideBar">
            <Modal show={show}>
                <Modal.Header>
                    <Typography variant="h5">{ls.tittle2}</Typography>
                </Modal.Header>
                <Modal.Body>
                    <Typography variant="caption">{ls.desc1}</Typography>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShow(false)} variant="secondary">{ls.button1}</Button>
                    <Button onClick={hanldeLogout} variant="primary">{ls.button2}</Button>
                </Modal.Footer>
            </Modal>
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
            <Button onClick={logoutModal} id="logout"><Logout style={{width : '80%'}}/></Button>
        </Sider>
    )
}

export default Sidebar