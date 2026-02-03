import { Link } from "react-router-dom";
import "./Footer.css";
import { projectList } from "data/projectList";

export default function Footer(){
    return(
        <div className="Footer">
            <h2 className="font_Serenity">www.dlwldms.com</h2>
            <ul className="footer_url">
                <li>
                    <h4>Github</h4>
                    <p><a href="https://github.com/317dlwldms" target="_blank" rel="noreferrer">github.317dlwldms.com</a></p>
                </li>
                <li>
                    <h4>E-Mail</h4>
                    <p>_dlwldms@kakao.com</p>
                </li>
                <li>
                    <h4>Kakao Id</h4>
                    <p>_dlwldms</p>
                </li>
                <li>
                    <h4>Tel.</h4>
                    <p>010-4583-8375</p>
                </li>
            </ul>
            <div className="footer_nav">
                <ul>
                    <li><a href="./"><h4 >Home</h4></a></li>
                    <li className="nav_projectList">
                        {projectList.map((project, i)=>(
                            <Link to={`/project/${project.slug}`} target="_blank" key={i}>
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