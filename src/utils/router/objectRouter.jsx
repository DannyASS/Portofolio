import { createBrowserRouter, redirect } from "react-router-dom"
import ProfilePage from "../../pages/profile/profile"
import Layout from "../../components/shared/layout"
import LayoutPage from "../../components/shared/layout";
import { Person2, Dashboard, Web } from "@mui/icons-material";
import DashboardPage from "../../pages/dashboard/dashboard";
import { LangConfig } from "../../language/langConfig";
import MyProject from "../../pages/projects/project";
import LoginPage from "../../pages/login/login";
import { getAuthorization } from "../../halpers/storage";

const ls = LangConfig().menu
export const objectRouter = {
    dashboard : {
        title : ls.home,
        path : "/",
        element : <DashboardPage />,
        navbar: true,
        needAuth : true,
        icon: <Dashboard />,
        hideMenu : false,
    },
    profile : {
        title : ls.profile,
        path : "/Profile",
        element : <ProfilePage />,
        navbar: true,
        needAuth : true,
        icon: <Person2 />,
        hideMenu : false
    },
    project : {
        title : ls.project,
        path : "/Project",
        element : <MyProject />,
        navbar: true,
        needAuth : true,
        icon: <Web />,
        hideMenu : false
    },
    login : {
        title : ls.login,
        path : "/Login",
        element : <LoginPage />,
        navbar: false,
        icon: <Web />,
        needAuth : false,
        hideMenu : true
    },
}

export const convertObjectToArray = () => {
	const obj = objectRouter;
    const loaderFn = objectKey => {
		if (objectKey.needAuth) {
			if (!getAuthorization()) {
				return redirect(obj.login.path);
			}
		}
		if (objectKey.path == obj.login.path) {
			if (getAuthorization()) {
				return redirect(obj.dashboard.path);
			}
		}
		return null;
	};

	const dataObject = Object.keys(obj).map(key => ({
		...obj[key],
		children: obj[key].children
			? Object.keys(obj[key].children).map(key2 => ({
					...obj[key].children[key2],
                    loader: () => loaderFn(obj[key])
				}))
			: null,
        loader: () => loaderFn(obj[key])
	}));
	return dataObject;
};

export const router = createBrowserRouter([{
    Component: LayoutPage,
    loader() {
        return { authorization: getAuthorization() };
    },
    children: convertObjectToArray()
}])