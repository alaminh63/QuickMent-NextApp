import secondImage from "../../../Assets/TopArticles/Frame 1000001069-1.png";
import firstImage from "../../../Assets/TopArticles/Frame 1000001069.png";
import thirdImage from "../../../Assets/TopArticles/Frame 1000001069-2.png";
import profileImage from "../../../Assets/TopArticles/Ellipse 2.png";
import menuIcon from "../../../Assets/TopArticles/language 4.png";
import Image from "next/image";
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
    <div>
      <div className="grid grid-cols-3 gap-4">
        {topArticle.map((item) => (
          <div key={item.title}>
            <div className="">
              <div>
                <Image src={item.image} alt="" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <h3 className="text-purple-500 font-medium">
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
              <p className="text-sm text-gray-600">{item.description}</p>
              <div>
                <ul className="flex text-[12px] gap-3">
                  {item.tags.map((tag) => (
                    <li key={tag} className="bg-slate-200 p-2 rounded-lg">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArticles;
