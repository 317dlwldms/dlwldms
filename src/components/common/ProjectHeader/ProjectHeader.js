import logo from "asset/icons/favicon.svg";
import "./ProjectHeader.css";
import { projectList } from "data/projectList";
import { Link } from "react-router-dom";

export default function ProjectHeader(){
    return(
        <div className="ProjectHeader">
            <Link to={"/"} className="logo">
                <img alt="logo" src={logo}/>
                <h1>dlwldms</h1>
            </Link>
            <ul>
                {projectList.map((project, i)=>(
                    <li key={i}>
                        <Link to={`/project/${project.slug}`}>
                            {project.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}