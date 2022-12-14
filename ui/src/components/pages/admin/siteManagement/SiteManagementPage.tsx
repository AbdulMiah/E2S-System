import { useEffect } from "react";
import SiteTable from "./SiteTable";

interface SiteManagementPageProps {
    setTopbarTitle: any;
}

function SiteManagementPage({ setTopbarTitle }: SiteManagementPageProps) {
    useEffect(() => {
        setTopbarTitle("Site Management");
        document.title = "Admin - Site Management";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div data-testid="siteManagement" className="text-center">
            <SiteTable />
        </div>
    );
}

export default SiteManagementPage;
