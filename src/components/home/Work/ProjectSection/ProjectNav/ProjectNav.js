import "./ProjectNav.css";

import { projectList } from "data/projectList";
import { Link } from "react-router-dom";

export default function WebNav(){
    return(
        <ul className="WebNav">
            {projectList.map(project=>(
                <li key={project.title}>
                    <Link to={`/project/${project.slug}`}>
                        <img alt={project.slug} src={project.logo} />
                    </Link>
                </li>
            ))}
        </ul>
    )
}