import "./ProjectNav.css";

import { projectList } from "data/projectList";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectNav(){
    const [projectActive,setProjectActive] = useState("");

    return(
        <div className="ProjectNav">
            <ul className="on">
                {projectList.map(project=>(
                    <li 
                        key={project.title}
                        onMouseEnter={()=> setProjectActive(project.slug)}
                        onMouseLeave={()=> setProjectActive("")}
                        className={projectActive === project.slug ? "on" : ""}
                    >
                        <p className="title">
                            {project.title}
                        </p>
                        <Link to={`/project/${project.slug}`}>
                            <img alt={project.slug} src={project.logo} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}