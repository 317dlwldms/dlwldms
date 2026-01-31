
import "./Work.css";
import DesignSection from "./DesignSection/DesignSection";
import ProjectSection from "./ProjectSection/ProjectSection";
export default function Work(){
    return(
        <div className="Work">
            <ProjectSection />
            <DesignSection />
        </div>
    )
}