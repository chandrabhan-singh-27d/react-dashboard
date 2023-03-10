import {Outlet} from 'react-router-dom'
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from '../components/Footer';
const Layout = () => {
    return (
        <>
            <Sidebar />
            <main>
                <Header />
                <Footer />
            </main>
            <Outlet />
        </>
    );
}

export default Layout;