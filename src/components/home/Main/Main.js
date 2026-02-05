import "./Main.css";
import FlipCard from "./FlipCard/FlipCard";

export default function Main(){
    return(
        <div className="Main" id="home">
            <FlipCard />
            <div className="next_project">
                <a href="#project">
                    <p>View Project</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="7" viewBox="0 0 16 7" fill="none">
                            <path d="M14.3235 0.750088L7.53674 5.869L0.750034 0.750088" stroke="#0C1219" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    )
}