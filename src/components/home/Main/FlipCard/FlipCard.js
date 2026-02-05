import "./FlipCard.css";
import { motion } from "framer-motion";
import { useState } from "react";
import infoImg from "asset/images/home/info.png";
import nameImg from "asset/images/home/name.svg";
import qrImg from "asset/images/home/qr.png";
import { urlList } from "data/urlList";

export default function FlipCard(){
    const [flipped, setFlipped] = useState(false);

    return(
        <motion.div className="FlipCard"
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{ duration: 0.6, ease: "ease"}}
        >
            <motion.div className="card"
                onClick={()=> setFlipped(prev => !prev)}
                animate={{ rotateY: flipped ? 180 : 0}}
                transition={{ duration: 0.6, ease: "easeInOut"}}
            >
                <div className="card-face front">
                    <div className="front_top">
                        <div>
                            <img alt="info" src={infoImg}></img>
                            <p>(李知恩) 이지은</p>
                        </div>
                        <img alt="name" src={nameImg}></img>
                    </div>
                    <div className="front_bottom">
                        <ul>
                            {urlList.map(list => (
                                <li>
                                    <a href={list.url} target="_blank" rel="noopener noreferrer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                    >
                                        <p className="title">{list.title}</p>
                                        <p className="text">{list.text}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p>형태를 빚는 감각에서 기능을 구현하는 논리로</p>
                    </div>
                </div>
                <div className="card-face back">
                    <div>
                        <p>GITHUB</p>
                        <div className="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 18 15" fill="none">
                                <path d="M1 6.36397C0.447715 6.36397 0 6.81168 0 7.36397C0 7.91625 0.447715 8.36397 1 8.36397V7.36397V6.36397ZM17.7071 8.07107C18.0976 7.68055 18.0976 7.04739 17.7071 6.65686L11.3431 0.2929C10.9526 -0.0976243 10.3195 -0.0976243 9.92893 0.2929C9.53841 0.683424 9.53841 1.31659 9.92893 1.70711L15.5858 7.36397L9.92893 13.0208C9.53841 13.4113 9.53841 14.0445 9.92893 14.435C10.3195 14.8256 10.9526 14.8256 11.3431 14.435L17.7071 8.07107ZM1 7.36397V8.36397H17V7.36397V6.36397H1V7.36397Z" fill="black"/>
                            </svg>
                        </div>
                        <a href="https://github.com/317dlwldms" target="_blank" rel="noopener noreferrer"
                            onClick={(e)=>{
                                e.stopPropagation();
                            }}
                        >
                            <img alt="qr" src={qrImg} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}