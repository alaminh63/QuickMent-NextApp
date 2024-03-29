import React from "react";
import Image from "next/image";
import firstImage from "/public/TopArticles/Frame 1000001069.png";
import secondImage from "/public/TopArticles/Frame 1000001069-1.png";
import thirdImage from "/public/TopArticles/Frame 1000001069-2.png";
import profileImage from "/public/TopArticles/Ellipse 2.png";
import menuIcon from "/public/TopArticles/language 4.png";
import TopArticleButton from "./TopArticleButton";

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
  ];

  return (
    <div className="m-2">
      <h2 className="text-lg font-bold my-6">Top Articles</h2>
      <div className="grid md:grid-cols-3 md:max-w-full max-w-[380px] mx-auto md:gap-4 gap-8">
        {topArticle.map((item) => (
          <div key={item.title} className="">
            <div className="md:px-0 px-8 w-96 border rounded-xl shadow-lg pb-2">
              <div>
                <Image src={item.image} alt="" />
              </div>
              <div className="px-4">
                <div className="flex my-2 items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <h3 className="text-purple-500 text-sm font-bold">
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
                    />
                    <p className="text-xs font-bold">{item.name}</p>
                  </div>
                </div>
                <div className="md:flex justify-between">
                  <h2 className="text-[17px] font-bold">{item.title}</h2>
                  {item?.publish === "Created" ? (
                    <p className="text-xs md:my-0 my-3 rounded-md px-4 py-2 bg-purple-200 text-purple-600 font-semibold">
                      {item.publish}
                    </p>
                  ) : (
                    <p className="text-xs md:my-0 rounded-md px-4 py-2 bg-green-200 text-green-500 font-semibold">
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
                <div className="flex gap-4 items-center justify-between my-2">
                  <TopArticleButton />
                  <div className="w-1/6 bg-slat-400">
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
