import Axios from "axios";
import React, { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/reusable/sidebar/Sidebar";
import Topbar from "./components/reusable/topbar/Topbar";
import BillValidation from "./components/pages/BillValidation";
import CostForecast from "./components/pages/CostForecast";
import Reports from "./components/pages/Reports";
import SignIn from "./components/pages/signIn/SignIn";
import AdminRoutes from "../src/routes/AdminRoutes";
import ProtectedRoutes from "../src/routes/ProtectedRoutes";
import Dashboard from "./components/pages/Dashboard";

import SiteManagementPage from "./components/pages/admin/siteManagement/SiteManagementPage";
import UserManagementPage from "./components/pages/admin/userManagement/UserManagementPage";
import OverviewPage from "./components/pages/admin/overview/OverviewPage";
import OrganisationPage from "./components/pages/admin/siteManagement/OrganisationPage";

function App () {
    Axios.defaults.withCredentials = true;

    const [currentSite, setCurrentSite] = useState<number>(1);
    const [topbarTitle, setTopbarTitle] = useState("");

    //Defines the paths of each page
    //This file should only have the topbar and sidebar
    return (
        <>
            <Router>
                <Topbar
                    setCurrentSite={setCurrentSite}
                    currentSite={currentSite}
                    topbarTitle={topbarTitle}
                />
                <Sidebar />
                <Routes>
                    <Route element={<ProtectedRoutes />}>
                        <Route
                            path="/"
                            element={<Navigate to="/dashboard" />}
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <Dashboard
                                    setTopbarTitle={setTopbarTitle}
                                    currentSite={currentSite}
                                    key={currentSite}
                                />
                            }
                        />
                        <Route
                            path="/reports"
                            element={
                                <Reports
                                    setTopbarTitle={setTopbarTitle}
                                    currentSite={currentSite}
                                    key={currentSite}
                                />
                            }
                        />
                        <Route
                            path="/bill-validation"
                            element={
                                <BillValidation
                                    setTopbarTitle={setTopbarTitle}
                                    currentSite={currentSite}
                                    key={currentSite}
                                />
                            }
                        />
                        <Route
                            path="/cost-forecast"
                            element={
                                <CostForecast
                                    setTopbarTitle={setTopbarTitle}
                                    currentSite={currentSite}
                                    key={currentSite}
                                />
                            }
                        />
                    </Route>
                    {/* admin routes */}
                    <Route element={<AdminRoutes />}>
                        <Route
                            path="/admin/overview"
                            element={
                                <OverviewPage setTopbarTitle={setTopbarTitle} />
                            }
                        />
                        <Route
                            path="/admin/site-management"
                            element={
                                <SiteManagementPage
                                    setTopbarTitle={setTopbarTitle}
                                />
                            }
                        />
                        <Route
                            path="/admin/user-management"
                            element={
                                <UserManagementPage
                                    setTopbarTitle={setTopbarTitle}
                                />
                            }
                        />
                        <Route
                            path="/admin/organisation-management"
                            element={
                                <OrganisationPage
                                    setTopbarTitle={setTopbarTitle}
                                />
                            }
                        />
                    </Route>
                    <Route path="/sign-in" element={<SignIn />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
