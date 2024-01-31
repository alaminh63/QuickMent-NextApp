"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const Sidebar = () => {
  const sideBarItems = [
    {
      title: "Content",
    },
    {
      title: "Team",
    },
    {
      title: "User",
    },
    {
      title: "App/Web",
    },
    {
      title: "Analytics",
    },
    {
      title: "Media",
    },
    {
      title: "Notification",
    },
    {
      title: "Setting",
    },
  ];
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col gap-2 ">
                  {sideBarItems.map((item) => (
                    <li
                      className=" rounded-lg px-4  py-2"
                      key={item.title}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="md:block hidden">
        <ul className="flex flex-col gap-2 ">
          {sideBarItems.map((item) => (
            <li
              className=" rounded-lg px-4 py-2"
              key={item.title}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
