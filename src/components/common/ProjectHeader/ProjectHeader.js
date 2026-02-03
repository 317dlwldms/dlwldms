import logo from "asset/icons/favicon.svg";
import "./ProjectHeader.css";
import { projectList } from "data/projectList";
import { Link } from "react-router-dom";

export default function ProjectHeader(){
    
    const handleLinkClick = () => {
        //다른 프로젝트 클릭하면 slidebox가 .on 제거하면서 slide 접힘
        const elemets = document.querySelectorAll(".slidebox_wrapper");
        elemets.forEach((el) => {
            el.classList.remove("on");  
        })
    }

    return(
        <div className="ProjectHeader">
            <Link to={"/"} className="logo">
                <img alt="logo" src={logo}/>
                <h1>dlwldms</h1>
            </Link>
            <ul>
                {projectList.map((project, i)=>(
                    <li key={i}>
                        <Link to={`/project/${project.slug}`} onClick={handleLinkClick}>
                            {project.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}