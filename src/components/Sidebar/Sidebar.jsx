import DashboardLogo from "../../assets/Dashboard_Logo.svg";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
    return (
        <>
            <aside className="bg-blue-900 w-60 h-screen px-5 pb-8 mr-4 text-white border-amber-200 border-r-2">
                <div className="flex items-center justify-start my-5">
                    <img src={DashboardLogo} alt="Dashboard Logo" width="45" />
                    <div className="text-2xl ml-4">AnAlyze</div>
                </div>
                <SidebarMenu />
            </aside>
        </>
    );
};

export default Sidebar;
