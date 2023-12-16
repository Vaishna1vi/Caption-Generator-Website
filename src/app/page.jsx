import VideoSection from "./components/videoSection";
import UploadVideo from "./components/uploadVideo";
import PageHeaders from "./components/pageHeaders";
export default function Home() {
  
  return (
    <>
      <PageHeaders
        h1text={"Add epic captions to your videos"}
        h2text={"Just upload your video and we will do the rest"}
      />
      <div className="text-center">
        <UploadVideo />
      </div>
      <VideoSection />
    </>
  );
}
