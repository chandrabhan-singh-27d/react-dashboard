import {Outlet} from 'react-router-dom'
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
const Layout = () => {
    return (
        <>
            <Sidebar />
            <main>
                <Header />
            </main>
            <Outlet />
        </>
    );
}

export default Layout;