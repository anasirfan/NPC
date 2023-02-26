import { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import VideoPlayer from "@/components/video_player";

export default function IndexPage() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-col flex-1">
        <Navbar onSidebarToggle={handleSidebarToggle} />
        <div className="flex-1">
        <VideoPlayer/>
        </div>
      </div>
    </div>
  );
}


