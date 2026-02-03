import "./ProjectImgs.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function ProjectImgs({ project }){
    return(
        <div className="ProjectImgs">
            <div className="img_wrapper">
                {/* Project 이미지 클릭하면 웹사이트로 이동 */}
                <Link to={project.url} target="_blank" rel="noopener noreferrer">
                    <div className="img_png">
                        <div className="click_text">
                            <div className="click_svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M7.99999 3.99998V6.66665M7.99999 1.33331C10.5773 1.33331 12.6667 3.42265 12.6667 5.99998V9.99998C12.6667 12.5773 10.5773 14.6666 7.99999 14.6666C5.42267 14.6666 3.33333 12.5773 3.33333 9.99998V5.99998C3.33333 3.42265 5.42267 1.33331 7.99999 1.33331Z" stroke="#0C1219" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <p>Click Visit Website</p>
                        </div>
                        <img alt={project.title} src={project.homeImg} loading="lazy"/>
                    </div>
                    {Array.isArray(project.imgs) &&
                        project.imgs.map((src,i)=>(
                            // 모션 효과
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
                </Link>
            </div>
        </div>
    )
}