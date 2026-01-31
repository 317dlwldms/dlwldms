import { useState } from "react";
import "./ProjectInfo.css";
import plusIcon from "asset/icons/lucide/plus.svg";

export default function ProjectInfo({project}){
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = (e) => {
        if(isClicked) {
            e.preventDefault();
            return;
        }
        setTimeout(()=>{
            setIsClicked(false);
        }, 1000);
    }
    const InfoRow = ({label, value}) => {
        if(!value || value.length === 0) return null;
        return(
            <div className="url">
                <h4>{label}</h4>
                <a href={value.url} target="_blank" rel="noreferrer" onClick={handleClick} className={isClicked ? "is-clicked" : ""}>{value.text}</a>
            </div>
        )
    }

    return(
        <div className="ProjectInfo">
            
            <div className="info_wrapper">

                <h1 className="font_Serenity">{project.title}</h1>
                <div className="sub">
                    <p className="overview">{project.overview}</p>
                    <div className="keyFeatures">
                        <p className="kF">{project.keyFeatures.label}</p>
                        {project.keyFeatures.text}
                    </div>
                </div>
                <div className="slidebox_wrapper" onClick={(e) => e.currentTarget.classList.toggle("on")}>
                    <div className="slidebox_title">
                        <h3>Info</h3>
                        <div className="svg">
                            <img alt="plus" src={plusIcon} />
                        </div>
                    </div>
                    <div className="slidebox">
                        
                        <InfoRow label="Github" value={project.github}/>
                        <InfoRow label="Figma" value={project.figma}/>
                        <InfoRow label="Notion" value={project.notion}/>
                        <div className="skill_tool">
                            <h4>Stack</h4>
                            <ul>
                                {Array.isArray(project.stack) &&
                                    project.stack.map((text,i)=>(
                                        <li key={i}>{text}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="slidebox_wrapper" onClick={(e) => e.currentTarget.classList.toggle("on")}>
                    <div className="slidebox_title">
                        <h3>Next Steps</h3>
                        <div className="svg">
                            <img alt="plus" src={plusIcon} />
                        </div>
                    </div>
                    <div className="slidebox">
                        <p className="nextSteps">{project.nextSteps}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}