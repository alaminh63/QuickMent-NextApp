import Image from "next/image";
import first from "../../../../public/LastSection/1.png";
import second from "../../../../public/LastSection/2.png";
import three from "../../../../public/LastSection/3.png";
import { Button } from "@/components/ui/button";

const LastSection = () => {
  const advertisements = [
    {
      image: first,
      title: "Build your business",
      description:
        "Shopify has all the tools you need to start, sell, market, and manage.",
    },
    {
      image: second,
      title: "Libre Coffee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      image: three,
      title: "KFC",
      description:
        "Shopify has all the tools you need to start, sell, market, and manage.",
    },
  ];
  return (
    <div className="m-2">
      <h2 className="text-lg font-bold my-6">Top Articles</h2>
      <div className="grid md:grid-cols-3  md:max-w-full max-w-[380px] mx-auto md:gap-4 gap-8">
        {advertisements.map((item) => (
          <div key={item.title} className="flex shadow-2xl px-4 rounded-md w-full items-center gap-3">
            <div className="w-5/12">
              <Image src={item.image} alt="" />
            </div>
            <div className="w-7/12">
              <div>
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
                <div className="flex mt-3  gap-4 items-center justify-between my-2">
                  <Button
                    variant="secondary"
                    className="bg-purple-200 w-5/6 py-5"
                  >
                    View
                  </Button>

                  <div className=" bg-slat-400 bg-purple-100 text-black rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-more-horizontal"
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

export default LastSection;
