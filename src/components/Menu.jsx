import React, { useContext, useState } from "react";
import { Separator } from "./ui/separator";
import { useNavigate } from "react-router-dom";
import {
  BookmarkCheck,
  CloudUpload,
  FileText,
  LayoutDashboard,
  LogOut,
  UserPlus,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { authContext } from "@/App";

const Menu = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useContext(authContext);
  const [selectedItem, setSelectedItem] = useState(null);
  let location = useLocation();

  const admin = [
    {
      displayName: "Dashboard",
      routeName: "/dashboard",
      iconName: <LayoutDashboard />,
    },
    {
      displayName: "Upload Document",
      routeName: "/upload-document",
      iconName: <CloudUpload />,
    },
    {
      displayName: "Project Reports",
      routeName: "/report",
      iconName: <FileText />,
    },
    {
      displayName: "Assigned Tasks",
      routeName: "/assign-tasks",
      iconName: <UserPlus />,
    },
  ];

  const handleItemClick = (routeName, index) => {
    setSelectedItem(index);
    navigate(routeName);
  };

  return (
    <div className="bg-primary flex flex-col justify-between h-screen min-w-[20vw] max-w-[20vw] w-[20vw]">
      <div>
        <div>
          <p className="text-primary-foreground text-lg m-4">Task Management</p>
          <Separator />
        </div>
        <div className="text-primary-foreground flex flex-col gap-5 mt-4 w-fit">
          {admin.map((item, index) => (
            <p
              key={index}
              className={`ml-4 p-2 cursor-pointer flex gap-2 rounded-lg hover:bg-hover ${
                location.pathname === item.routeName
                  ? "bg-white text-primary hover:bg-white "
                  : "hover:bg-primary/90"
              }`}
              onClick={() => handleItemClick(item.routeName, index)}
            >
              {item.iconName}
              {item.displayName}
            </p>
          ))}
        </div>
      </div>
      <div className="text-primary-foreground m-4">
        <p
          className="text-primary-foreground text-lg cursor-pointer flex items-center gap-2 m-4"
          onClick={() => {
            setIsLoggedIn(false);
            navigate("/login");
          }}
        >
          <LogOut /> Logout
        </p>
      </div>
    </div>
  );
};

export default Menu;