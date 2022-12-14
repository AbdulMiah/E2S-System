import UserTable from "./UserTable";
import { useEffect } from "react";

interface UserManagementPageProps {
    setTopbarTitle: any;
}

function UserManagementPage({ setTopbarTitle }: UserManagementPageProps) {
    useEffect(() => {
        setTopbarTitle("User Management");
        document.title = "Admin - User Management";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div data-testid="userManagement" className="text-center">
            <UserTable />
        </div>
    );
}

export default UserManagementPage;
