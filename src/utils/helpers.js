import { IoHomeOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { RiUserLine } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import { RiCustomerService2Line } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";




export const SideNav = [
    {
        name: 'Home',
        icon: <IoHomeOutline />
    },
    {
        name: 'Wallets',
        icon: <IoWalletOutline />
        
    },
    {
        name: 'Budgets',
        icon: <FaCircleDollarToSlot />
        
    },
    {
        name: 'Goals',
        icon: <GoGoal />
    },
    {
        name: 'Profile',
        icon: <RiUserLine />

    },
    {
        name: 'Analytics',
        icon: <VscGraph />

    },
    {
        name: 'Support',
        icon: <RiCustomerService2Line />

    },
    {
        name: 'Affiliates',
        icon: <ImAttachment />

    },
    {
        name: 'Settings',
        icon: <IoSettingsOutline />

    },
]
