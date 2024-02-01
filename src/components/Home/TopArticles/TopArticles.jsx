import secondImage from "../../../Assets/TopArticles/Frame 1000001069-1.png";
import firstImage from "../../../Assets/TopArticles/Frame 1000001069.png";
import thirdImage from "../../../Assets/TopArticles/Frame 1000001069-2.png";
import profileImage from "../../../Assets/TopArticles/Ellipse 2.png";
import menuIcon from "../../../Assets/TopArticles/language 4.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const TopArticles = () => {
  const topArticle = [
    {
      image: firstImage,
      category: "BUSINESS",
      date: "20 Sep 2022",
      name: "Maria Doe",
      title: "Rules of Effective Branding",
      publish: "Created",
      description: "Why Branding matters for your Business",
      tags: ["Branding", "Communication", "Branding"],
    },
    {
      image: secondImage,
      category: "ECONOMY",
      date: "20 Sep 2022",
      name: "Maria Doe",
      publish: "Published",
      title: "Research on biodiversity an...",
      description: "Why Branding matters for your Business",
      tags: ["World", "Population"],
    },
    {
      image: thirdImage,
      category: "POLITICS",
      date: "20 Sep 2022",
      name: "Maria Doe",
      publish: "Published",
      title: "Close and historical ties to h...",
      description: "Why Branding matters for your Business",
      tags: ["Politics", "Defence"],
    },
    // {
    //   image: secondImage,
    //   category: "POLITICS",
    //   date: "20 Sep 2022",
    //   name: "Maria Doe",
    //   publish: "Published",
    //   title: "Close and historical ties to h...",
    //   description: "Why Branding matters for your Business",
    //   tags: ["Politics", "Defence"],
    // },
  ];
  return (
    <div className="m-2">
        <h2 className="text-lg font-bold my-6">Top Articles</h2>
      <div className="grid md:grid-cols-3 md:gap-4 gap-8">
        {topArticle.map((item) => (
          <div key={item.title}>
            <div className="md:px-0 px-8 w-96">
              <div>
                <Image src={item.image} alt="" />
              </div>
              <div className="px-4">
                <div className="flex my-2 items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <h3 className="text-purple-500 text-sm  font-bold">
                      {item.category}
                    </h3>
                    <p className="text-[12px] text-gray-600">{item.date}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Image
                      className="rounded-full"
                      height={25}
                      width={25}
                      src={profileImage}
                      alt=""
                    ></Image>
                    <p className="text-xs font-bold">{item.name}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <h2 className="text-[17px] font-bold">{item.title}</h2>
                  {item?.publish === "Created" ? (
                    <p className="text-xs rounded-md px-4 py-2 bg-purple-200 text-purple-600 font-semibold">
                      {item.publish}
                    </p>
                  ) : (
                    <p className="text-xs  rounded-md px-4 py-2 bg-green-200 text-green-500 font-semibold">
                      {item.publish}
                    </p>
                  )}
                </div>
                <p className="text-[12px] text-gray-600">{item.description}</p>
                <div className="mt-2">
                  <ul className="flex text-[12px] gap-3">
                    {item.tags.map((tag) => (
                      <li key={tag} className="bg-slate-200 p-2 rounded-lg">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex  gap-4 items-center justify-between my-2">
                  <Button
                    variant="secondary"
                    className="bg-purple-300 w-5/6 py-6"
                  >
                    View
                  </Button>

                  <div className="w/1/6 bg-slat-400">
                    <Image src={menuIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArticles;
