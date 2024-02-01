import FirstBanner from "@/components/FirstBanner/FirstBanner";
import LastSection from "@/components/Home/LastSection/LastSection";
import TopArticles from "@/components/Home/TopArticles/TopArticles";
import TopStories from "@/components/Home/TopStories/TopStories";
const page = () => {
  return (
    <main>
      <div>
        <FirstBanner />
        <TopArticles />
        <TopStories />
        <div className="mt-[13rem]">
          <LastSection />
        </div>
      </div>
    </main>
  );
};

export default page;
