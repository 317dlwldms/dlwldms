import ProjectNav from "components/common/ProjectNav/ProjectNav";
import "./About.css";
import { motion } from "framer-motion";

export default function About(){
    return(
        <div className="About section" id="about">
            <h2>About</h2>
            <motion.h3 className="font_Serenity"
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}
            >
                "형태를 빚는 감각에서<span>기능을 구현하는 논리로"</span>
            </motion.h3>
            <motion.div className="about_textbox"
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}
            >
                <p>도예를 전공하며 <span>CERAMIC ART(1)</span> 조형예술의 기초와 감각을 쌓았습니다. 전공 수업 중 디지털 그래픽 디자인을 <span>GRAPHIC DESIGN(2)</span> 통해 평면 디자인을 접하게 되었고, 졸업 후 미술 학원과 교육 과정을 거치며 상업 디자인을 보다 깊이 이해하게 되었습니다. 웹 디자인을 <span>WEB DESIGN(3)</span> 접하며 사용자 중심의 인터페이스를 고민하게 되었고, 디자인한 작업물을 직접 구현하고자 HTML, CSS를 익히며 웹 구조와 표준을 고려한 웹 퍼블리싱<span>WEB PUBLISHING(4)</span>에 더 큰 흥미를 느꼈습니다. 현재는 더 나아가 모든 기기에 최적화된 반응형 웹과 생동감 있는 인터렉션을 구현하고 <span>INTERACTIVE CODING(5)</span> 있습니다.</p>
            </motion.div>
            <ProjectNav />
        </div>
    )
}