import ProjectVideo from "../components/ProjectVideo";
import ProjectContent from "../components/ProjectContent";
import ProjectContentHeader from "../components/ProjectContentHeader";



const ProjectContentPage = () => {
 
  return (
    <div className="pt-32 text-shade1 px-4">
      <ProjectContentHeader
        projectTitle="project title"
        projectType="Project Type"
        img={"/codevenue.webp"}
      />

      <ProjectContent
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et
          facere dolore corrupti laborum!"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          officiis ipsa neque laborum ex veniam at distinctio accusantium?
          Consequuntur esse illum numquam nobis fugit aut!"
      />
      <div className="flex flex-col lg:flex-row gap-8 xl:max-w-[1600px] xl:mx-auto mb-12">
        <ProjectVideo src="https://media.istockphoto.com/id/1444290062/video/dramatic-aerial-view-of-the-statue-of-liberty-and-nyc-skyline-at-dawn.mp4?s=mp4-640x640-is&k=20&c=SEwKZXkGSod44SGFZ0r8wL3ZWqM7ZTxYzaYX0njhkQo=" />
        <ProjectVideo src="https://videos.pexels.com/video-files/3999358/3999358-uhd_3840_2160_24fps.mp4" />
      </div>
    </div>
  );
};

export default ProjectContentPage;
