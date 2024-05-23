import { createBrowserRouter } from "react-router-dom"
import ProfilePage from "../../pages/profile/profile"
import Layout from "../../components/shared/layout"
import LayoutPage from "../../components/shared/layout";
import { Person2, Dashboard } from "@mui/icons-material";
import DashboardPage from "../../pages/dashboard/dashboard";


export const objectRouter = {
    dashboard : {
        title : "Dashboard",
        path : "/",
        element : <DashboardPage />,
        navbar: true,
        icon: <Dashboard />
    },
    profile : {
        title : "Profile",
        path : "/Profile",
        element : <ProfilePage />,
        navbar: true,
        icon: <Person2 />
    },
}

export const convertObjectToArray = () => {
	const obj = objectRouter;
	const dataObject = Object.keys(obj).map(key => ({
		...obj[key],
		children: obj[key].children
			? Object.keys(obj[key].children).map(key2 => ({
					...obj[key].children[key2]
				}))
			: null
	}));
	return dataObject;
};

export const router = createBrowserRouter([{
    Component: LayoutPage,
    children: convertObjectToArray()
}])