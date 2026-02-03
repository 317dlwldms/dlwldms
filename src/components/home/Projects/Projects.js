import "./Projects.css";
import { projectList } from "data/projectList";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects(){
    return(
        <div className="Projects section" id="project">
            <h2>Project</h2>
            <div className="project_section">
                {projectList.map((project, i)=> (
                    <motion.div key={i} className= "project_content"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                    >
                        {/* link 연결된 프로젝트 클릭하면 해당 프로젝트 상세페이지로 이동 */}
                        <Link to= {`/project/${project.slug}`} target="_blank" rel="noopener noreferrer"> 
                        <img alt={project.title} src={project.homeImg} loading="lazy"/>
                        <div className="project_textbox">
                            <h4>{project.title}</h4>
                            <p>{project.overview}</p>
                        </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}