import { HiOutlineViewGrid, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { MdOutlinePets } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/userManager",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "Adopters",
    label: "Adopters",
    path: "/userManager/adopters",
    icon: <IoPeople />,
  },
  {
    key: "Verification Requests",
    label: "Verification Requests",
    path: "/userManager/account-vericifacton-requests",
    icon: <FaTasks />,
  },
  {
    key: "Users",
    label: "Users",
    path: "/userManager/userProfile",
    icon: <MdOutlinePets />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "support",
    label: "Help & Support",
    path: "/userManagement/heplAndSupport",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];