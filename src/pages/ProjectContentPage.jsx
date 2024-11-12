import ProjectVideo from "../components/ProjectVideo";
import ProjectContent from "../components/ProjectContent";
import ProjectContentHeader from "../components/ProjectContentHeader";
import { useParams } from "react-router-dom";
import projects from "../data/projectData";
import NotFoundPage from "./NotFoundPage";


const ProjectContentPage = () => {
  const { work } = useParams();
  const workData = projects.find((w) => w.title === work);
  if (!workData) {
    return <NotFoundPage />;
  }
  return (
    <div className="pt-32 text-shade1 px-4">
      <ProjectContentHeader
        url={workData.url}
        projectTitle={workData.title}
        projectType={workData.type}
        img={workData.img}
      />

      <ProjectContent data={workData} />
      <div className="flex flex-col lg:flex-row gap-8 xl:max-w-[1600px] xl:mx-auto mb-12">
        <ProjectVideo src="https://media.istockphoto.com/id/1444290062/video/dramatic-aerial-view-of-the-statue-of-liberty-and-nyc-skyline-at-dawn.mp4?s=mp4-640x640-is&k=20&c=SEwKZXkGSod44SGFZ0r8wL3ZWqM7ZTxYzaYX0njhkQo=" />
        <ProjectVideo src="https://videos.pexels.com/video-files/3999358/3999358-uhd_3840_2160_24fps.mp4" />
      </div>
      <div className="flex justify-center font-bold">
        <a target="_blank" href={workData.url}>
          <button className="w-40 h-40 bg-shade2/15 hover:bg-shade1 hover:text-shade3 transition-all duration-200 rounded-full flex justify-center items-center">
          Live Demo
          </button>
        </a>
     
      </div>
    </div>
  );
};

export default ProjectContentPage;
