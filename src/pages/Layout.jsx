import {Outlet} from 'react-router-dom'
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header";
import Footer from '../components/Footer';
import HomePage from './Home';
const Layout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <main>
                <Header />
                <HomePage />
                <Footer />
            </main>
            <Outlet />
        </div>
    );
}

export default Layout;