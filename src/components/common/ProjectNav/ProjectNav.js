import "./ProjectNav.css";
import { projectList } from "data/projectList";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectNav(){
    //about 안에 위치한 project nav hover 효과 줘서 마우스 엔터 = 크기 커짐 / 리브 = 리셋
    const [projectActive,setProjectActive] = useState("");

    return(
        <motion.div className="ProjectNav"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{
                duration: 0.6,
                ease: "easeOut"
            }}
        >
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
                        <Link to={`/project/${project.slug}`} target="_blank" rel="noopener noreferrer">
                            <img alt={project.slug} src={project.logo} />
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}