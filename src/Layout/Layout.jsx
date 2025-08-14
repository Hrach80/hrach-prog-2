import { Outlet } from "react-router-dom";
import { NavBox } from "../Components/NavBox/NavBox";
import { MiniNav } from "../Components/MiniNav/MiniNav";
import { HerderBox } from "../Components/Header/HeaderBox";
import { SectionBox } from "../Components/Section/SectionBox";

const Layout = () => {
    return (
        <div>
            <Outlet />
            <MiniNav />
            <NavBox />
            <HerderBox />
            <SectionBox />
        
        
            
        </div>
    )
}
export default Layout;