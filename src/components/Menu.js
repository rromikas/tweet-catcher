import React from "react";
import HomeIcon from "icons/Home.png";
import TasksIcon from "icons/Tasks.png";
import ProfileIcon from "icons/Profile.png";
import DiscordIcon from "icons/Discord.png";
import SettingsIcon from "icons/Settings.png";
import AnalyticsIcon from "icons/Analytics.png";

const items = [
  { title: "Home", icon: HomeIcon },
  { title: "Tasks", icon: TasksIcon },
  { title: "Profile", icon: ProfileIcon },
  { title: "Discord", icon: DiscordIcon },
  { title: "Settings", icon: SettingsIcon },
  { title: "Analytics", icon: AnalyticsIcon },
];

const Menu = ({ page, setPage, closeMenu = () => {} }) => {
  return (
    <div className="text-white font-bold px-4">
      {items.map((x, i) => (
        <div
          onClick={() => {
            setPage(i);
            closeMenu();
          }}
          key={`menu-item-${i}`}
          className={`flex items-center ${
            page !== i ? "hover:" : ""
          }bg-blue-600 rounded-2xl px-4 py-3.5 mb-2 transition cursor-pointer w-52`}
        >
          <img width={20} src={x.icon} className="mr-3"></img>
          <div>{x.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
