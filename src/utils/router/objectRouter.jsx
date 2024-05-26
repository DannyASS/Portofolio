import { createBrowserRouter } from "react-router-dom"
import ProfilePage from "../../pages/profile/profile"
import Layout from "../../components/shared/layout"
import LayoutPage from "../../components/shared/layout";
import { Person2, Dashboard, Web } from "@mui/icons-material";
import DashboardPage from "../../pages/dashboard/dashboard";
import { LangConfig } from "../../language/langConfig";
import MyProject from "../../pages/projects/project";

const ls = LangConfig().menu
export const objectRouter = {
    dashboard : {
        title : ls.home,
        path : "/",
        element : <DashboardPage />,
        navbar: true,
        icon: <Dashboard />
    },
    profile : {
        title : ls.profile,
        path : "/Profile",
        element : <ProfilePage />,
        navbar: true,
        icon: <Person2 />
    },
    project : {
        title : ls.project,
        path : "/Project",
        element : <MyProject />,
        navbar: true,
        icon: <Web />
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