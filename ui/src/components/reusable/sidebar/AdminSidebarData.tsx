import * as FaIcons from "react-icons/fa";

// eslint-disable-next-line
{
    /*Can add more links or change paths to the sidebar using this data file*/
}
export const AdminSidebarData = [
    {
        title: "Overview",
        path: "/admin/overview",
        icon: <FaIcons.FaChartPie size="35" />,
    },
    {
        title: "User Management",
        path: "/admin/user-management",
        icon: <FaIcons.FaUsers size="35" />,
    },
    {
        title: "Site Management",
        path: "/admin/site-management",
        icon: <FaIcons.FaBuilding size="35" />,
    },
];
