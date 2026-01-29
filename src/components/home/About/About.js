import"./About.css";
import AboutLinks from "./AboutLinks/AboutLinks";
import AboutMain from "./AboutMain/AboutMain";

export default function About(){
    return(
        <div className="About section" id="about">
            <h2>ABOUT ME</h2>
            <AboutMain />
            <AboutLinks />
        </div>
    )
}