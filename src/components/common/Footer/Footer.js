import { Link } from "react-router-dom";
import "./Footer.css";
import { projectList } from "data/projectList";
import { urlList } from "data/urlList";

export default function Footer(){
    return(
        <div className="Footer">
            <h2 className="font_Serenity">www.dlwldms.com</h2>
            <ul className="footer_url">
                {urlList.map(list => (
                    <li>
                        <h4>{list.title}</h4>
                        <p><a href={list.url} target="_blank" rel="noopener noreferrer">{list.text}</a></p>
                    </li>
                ))}
                <li>
                    <h4>GitHub</h4>
                    <p><a href="https://github.com/317dlwldms" target="_blank" rel="noopener noreferrer">317dlwldms</a></p>
                </li>

            </ul>
            <div className="footer_nav">
                <ul>
                    <li><a href="/"><h4 >Home</h4></a></li>
                    <li className="nav_projectList">
                        {projectList.map((project, i)=>(
                            <Link to={`/project/${project.slug}`} target="_blank" rel="noopener noreferrer" key={i}>
                                <h4>
                                    {project.title}
                                </h4>
                            </Link>
                        ))}
                    </li>
                </ul>
                <p>dlwldms Portfolio by 2026</p>
            </div>
        </div>
    )
}