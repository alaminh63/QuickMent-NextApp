import Image from "next/image";
import categoriesIcon from "../../../public/FirstBanner/application 1.png";
import storiesIcon from "../../../public/FirstBanner/Group-1.png";
import advertisementsIcons from "../../../public/FirstBanner/Group-2.png";
import articleIcon from "../../../public/FirstBanner/Group.png";
const FirstBanner = () => {
  const FirstBanner = [
    {
      title: "Articles",
      secondaryText: "4,950 New Updates",
      icon: articleIcon,
    },
    {
      title: "Categories",
      secondaryText: "10,275 New Updates",
      icon: categoriesIcon,
    },
    {
      title: " Stories ",
      secondaryText: "4,193 New Updates",
      icon: storiesIcon,
    },
    {
      title: "Advertisements",
      secondaryText: "928 New Updates",
      icon: advertisementsIcons,
    },
  ];
  return (
    <div className="border m-4">
      <div className="md:block flex m-6 flex-col items-center justify-center my-4">
        <h2 className=" text-xl font-bold">Hello Admin,</h2>
        <p className="text-[15px] text-gray-500">
          This is what we got you for today.
        </p>
      </div>
      <div className="md:flex  justify-evenly">
        {FirstBanner.map((item) => (
          <div
            key={item.title}
            className="bg-slate-100 m-4 flex items-center justify-center h-[90px] rounded-lg md:w-[270px]"
          >
            <div className="flex items-center gap-2">
              <div className="bg-slate-200 p-4 rounded-full ">
                <Image className="w-8 h-8" src={item.icon} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-xs font-medium">{item.secondaryText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstBanner;
