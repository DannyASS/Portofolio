import { createBrowserRouter } from "react-router-dom"
import ProfilePage from "../../pages/profile/profile"
import Layout from "../../components/shared/layout"


export const objectRouter = {
    profile : {
        title : "Profile",
        path : "/Profile",
        element : <ProfilePage />,
        navbar: true
    }
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
    Component: Layout,
    children: convertObjectToArray()
}])