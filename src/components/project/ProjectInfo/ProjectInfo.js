import { useState } from "react";
import "./ProjectInfo.css";
import plusIcon from "asset/icons/lucide/plus.svg";
import ProjectHeader from "components/common/ProjectHeader/ProjectHeader";

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
    //data에 저장된 항목 중 비어있는 항목은 출력되지않게
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
            <ProjectHeader />
            <div className="info_wrapper">
                <h1 className="font_Serenity">{project.title}</h1>
                <div className="sub">
                    <p className="overview">{project.overview}</p>
                    <div className="keyFeatures">
                        <p className="kF">{project.keyFeatures.label}</p>
                        {project.keyFeatures.text}
                    </div>
                </div>
                <div className="slidebox_wrapper">
                    <div className="slidebox_title" onClick={(e) => e.currentTarget.parentElement.classList.toggle("on")}>
                        <h3>Info</h3>
                        <div className="svg">
                            <img alt="plus" src={plusIcon} />
                        </div>
                    </div>
                    <div className="slidebox">
                        
                        <InfoRow label="GitHub" value={project.github}/>
                        <InfoRow label="Figma" value={project.figma}/>
                        <InfoRow label="Notion" value={project.notion}/>
                        <div className="skill_tool">
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
                <div className="slidebox_wrapper">
                    <div className="slidebox_title" onClick={(e) => e.currentTarget.parentElement.classList.toggle("on")}>
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