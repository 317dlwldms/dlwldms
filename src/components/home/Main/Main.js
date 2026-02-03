import "./Main.css";
import { motion } from "framer-motion";

export default function Main(){
    return(
        <div className="Main" id="home">
            <motion.div className="main_wrapper"
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}
            >
                <div className="main_side">
                    <p>dlwldms</p>
                    <div className="line"></div>
                    <p>이지은</p>
                </div>
                <div className="main_side">
                    <div></div>
                    <p>형태를 빚는 감각에서 기능을 구현하는 논리로</p>
                </div>
            </motion.div>
        </div>
    )
}