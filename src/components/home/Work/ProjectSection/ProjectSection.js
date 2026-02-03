import { projectList } from "data/projectList";
import "./ProjectSection.css";
import { Link } from "react-router-dom";

export default function ProjectSection(){
    return(
        <div className="ProjectSection">
            {projectList.map((project, i)=> (
                <div key={i} className= "project_content">
                    <Link to= {`/project/${project.slug}`} target="_blank">
                    <img alt={project.title} src={project.homeImg} loading="lazy"/>
                    <div className="project_textbox">
                        <h4>{project.title}</h4>
                        <p>{project.overview}</p>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}