import { Outlet } from "react-router-dom";
import PageFooter from "./Footer/PageFooter";
import Navbar from "./Header/Navbar";
import React from "react";
function AppLayout(){
    return (
    <>
        <Navbar/>
        <Outlet/>
        <PageFooter/>
    </>
    )
}
export default AppLayout;