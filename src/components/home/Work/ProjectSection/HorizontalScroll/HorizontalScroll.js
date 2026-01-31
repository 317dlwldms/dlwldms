import { useRef } from "react"
import "./HorizontalScroll.css"
import { motion, useScroll, useTransform } from "framer-motion";
import { projectList } from "data/projectList";
import WebNav from "../ProjectNav/ProjectNav";

export default function HorizontalScroll(){
    
    const targetRef = useRef(null);

    const scrollLength = projectList.length * 100;

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0,1], ["0%", `-${(projectList.length -1) * 100}vw`]);

    return(
        <div className="HorizontalScroll" ref={targetRef} style={{height: `${scrollLength}vh`, position: "relative"}}>
            <div className="container" style={{position: "sticky", top: 0, height: "100vh", overflow: "hidden"}}>
                <motion.div className="wrapper" style={{x, display: "flex"}}>
                    {projectList.map((project, i) => (
                        <div className="content_wrapper"
                            key={i}
                            style={{
                                height: "calc(100vh - 5rem)",
                                flexShrink: 0,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <div className="content_box" style={{width: "100%", height:"100%",borderRadius: "1.5rem",overflow: "hidden", backgroundColor: "#ddd"}}>
                               
                                <img src={project.imgs[0]} alt={project.title} style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "center"}} />
                            </div>
                        </div>
                    ))}
                </motion.div>
                <WebNav></WebNav>
            </div>
            
        </div>
    )
}