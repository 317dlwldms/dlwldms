import "./Project.css";
import ProjectInfo from "components/project/ProjectInfo/ProjectInfo";
import ProjectImgs from "components/project/ProjectImgs/ProjectImgs";
import { useParams } from "react-router-dom";
import { projectList } from "data/projectList";

export default function Project(){
    const {slug} = useParams();
    const project = projectList.find(it => it.slug === slug);
    if(!project){return <p>아직 완성되지 않았습니다.</p>}
    
    return(
        <div className="Project">
            <ProjectInfo project={project}/>
            <ProjectImgs project={project}/>
        </div>
    )
}