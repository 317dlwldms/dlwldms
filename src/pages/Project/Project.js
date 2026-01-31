import "./Project.css";
import ProjectInfo from "components/project/ProjectInfo/ProjectInfo";
import ProjectImgs from "components/project/ProjectImgs/ProjectImgs";
import { useParams } from "react-router-dom";
import { projectList } from "data/projectList";
import ProjectHeader from "components/common/ProjectHeader/ProjectHeader";

export default function Project(){
    const {slug} = useParams();
    const project = projectList.find(it => it.slug === slug);
    if(!project){return <p>존재하지 않는 페이지입니다.</p>}
    
    return(
        <div className="Project">
            <ProjectHeader project={project}/>
            <ProjectInfo project={project}/>
            <ProjectImgs project={project}/>
        </div>
    )
}