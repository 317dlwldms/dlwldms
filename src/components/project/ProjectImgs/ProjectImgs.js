import "./ProjectImgs.css";
import { motion } from "framer-motion";
export default function ProjectImgs({ project }){
    
    return(
        <div className="ProjectImgs">
            <div className="img_wrapper">
                <div>
                    <img alt={project.title} src={project.homeImg} loading="lazy"/>
                </div>
                {Array.isArray(project.imgs) &&
                    project.imgs.map((src,i)=>(
                        <motion.div
                            key={i}
                            initial = {{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-100px"}}
                            transition={{duration: 0.6}}
                        >
                            <img alt={project.title} src={src} loading="lazy"/>
                        </motion.div>
                    ))
                }
                
            </div>
        </div>
    )
}