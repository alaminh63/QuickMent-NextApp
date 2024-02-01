
import Image from "next/image";
import first from "/public/TopStoires/Story.png";
import second from "/public/TopStoires/Story-1.png";
import third from "/public/TopStoires/Story-2.png";
import fourth from "/public/TopStoires/Story-3.png";
import TopStoryButtion from "./TopStoryButtion";


const TopStories = () => {
  const TopStoriesArray = [
    {
      title: "How 7 lines code turned into $36 Billion Empire",
      Category: "BUSINESS",
      date: "20 Sep 2022",
      view: "428",
      publish: "Published",
      image: [first],
    },
    {
      title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
      Category: "BUSINESS",
      date: "20 Sep 2022",
      view: "428",
      publish: "Created",
      image: [second],
    },
    {
      title: "Teknion wins Gold at 2022 International Design Awards ",
      Category: "Politics",
      date: "20 Sep 2022",
      view: "428",
      publish: "Draft",
      image: [third],
    },
    {
      title: "How 7 lines code turned into $36 Billion Empire",
      Category: "BUSINESS",
      date: "20 Sep 2022",
      view: "428",
      publish: "Published",
      image: [fourth],
    },
  ];

  return (
    <div className="m-2">
      <h2 className="text-lg font-bold my-6">Top Stories</h2>
      <div className="grid md:grid-cols-4 md:px-0 md:max-w-full max-w-[300px] mx-auto gap-4">
        {TopStoriesArray.map((item) => (
          <div key={item.title} className="rounded-md shadow-lg p-2">
            <div className="md:w-72 md:h-64 relative">
              <Image src={item.image[0]} className="" alt="" />
              <div className="absolute right-3 top-3 text-purple-600 flex gap-1">
                <div className="bg-purple-100 rounded-md px-2 py-1 flex items-center font-bold gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <p className="text-[10px]"> {item.view}</p>
                </div>
                <div className="bg-purple-100 rounded-md px-2  py-1 flex items-center font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bar-chart-4"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M13 17V9" />
                    <path d="M18 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-[16rem] text-white px-4">
                <h2 className="font-semibold text-[15px] text-lg ">
                  {item.title}
                </h2>
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-[13px]">{item.Category}</h2>
                  <p className=" text-[12px] text-gray-300">{item.date}</p>
                  <p className={`px-3 py-2 bg-opacity-60 text-black font-bold rounded-md ${item.publish === "Created" ? 'bg-white' : 'bg-purple-200 text-purple-600'}`}>
                    {item.publish}
                  </p>
                </div>
                <div className="flex mt-3  gap-4 items-center justify-between my-2">
                  <TopStoryButtion />
                  <div className="p-1 bg-slat-400 bg-purple-100 text-black rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-more-horizontal"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
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

export default TopStories;
