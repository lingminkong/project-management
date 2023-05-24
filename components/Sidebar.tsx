import Card from "./Card";
import Image from "next/image";
import SidebarLink, { Link } from "./SidebarLink";
import logo from "@/assets/images/logo.png";

const links: Link[] = [
  { label: "Home", icon: "Grid", path: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    path: "/calendar",
  },
  { label: "Profile", icon: "User", path: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    path: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex justify-center items-center">
        <Image src={logo} alt="Able logo" priority className="w-14" />
      </div>
      {links.map((link) => (
        <SidebarLink link={link} key={link.path} />
      ))}
    </Card>
  );
};

export default Sidebar;