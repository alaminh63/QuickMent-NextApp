"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import homeIcon from "../../../public/homeIcon.png";
import documentIcon from "../../../public/document-text.png";
import teamIcon from "../../../public/team.png";
import profileUserIcon from "../../../public/profileUser.png";
import appWebIcon from "../../../public/appWeb.png";
import analyticIcon from "../../../public/analytic.png";
import mediaIcon from "../../../public/media.png";
import notificationIcon from "../../../public/notification.png";
import settingIcon from "../../../public/Setting.png";
import CustomerSupportIcon from "../../../public/CustomSupport.png";

const Sidebar = () => {
  const sideBarItems = [
    {
      title: "Content",
      icon: documentIcon,
    },
    {
      title: "Team",
      icon: teamIcon,
    },
    {
      title: "User",
      icon: profileUserIcon,
    },
    {
      title: "App/Web",
      icon: appWebIcon,
    },
    {
      title: "Analytics",
      icon: analyticIcon,
    },
    {
      title: "Media",
      icon: mediaIcon,
    },
    {
      title: "Notification",
      icon: analyticIcon,
    },
    {
      title: "Setting",
      icon: settingIcon,
    },
  ];
  return (
    <div className="pt-20">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="">Open</SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                <p className=" mb-4 flex gap-2 items-center rounded-lg px-4 py-2">
                  <div>
                    <Image width="20" height="20" src={homeIcon} alt="" />
                  </div>
                  <p>Dashboard</p>
                </p>
                <ul className="flex flex-col gap-2 ">
                  {sideBarItems.map((item) => (
                    <li
                      className=" flex gap-2 items-center rounded-lg px-4 py-2"
                      key={item.title}
                    >
                      <div>
                        <Image width="18" height="18" src={item?.icon} alt="" />
                      </div>

                      {item.title}
                    </li>
                  ))}
                </ul>

                <p className=" mt-8 bg-cyan-100 flex gap-2 items-center rounded-lg px-4 py-2">
                  <div>
                    <Image
                      width="20"
                      height="20"
                      src={CustomerSupportIcon}
                      alt=""
                    />
                  </div>
                  <p>Customer Support</p>
                </p>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="md:block hidden">
        <p className=" mb-4 flex gap-2 items-center rounded-lg px-4 py-2">
          <div>
            <Image width="20" height="20" src={homeIcon} alt="" />
          </div>
          <p>Dashboard</p>
        </p>
        <ul className="flex flex-col gap-2 ">
          {sideBarItems.map((item) => (
            <li
              className=" flex gap-2 items-center rounded-lg px-4 py-2"
              key={item.title}
            >
              <div>
                <Image width="18" height="18" src={item?.icon} alt="" />
              </div>

              {item.title}
            </li>
          ))}
        </ul>

        <p className=" mt-8 bg-cyan-100 flex gap-2 items-center rounded-lg px-4 py-2">
          <div>
            <Image width="20" height="20" src={CustomerSupportIcon} alt="" />
          </div>
          <p>Customer Support</p>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
