import { Stack } from "@mui/material"
import { Outlet, useOutlet } from "react-router-dom"

const Layout = () => {
    const getOutlet = useOutlet()
    return(
        <Stack>
            <Outlet />
        </Stack>
    )
}


export default Layout;