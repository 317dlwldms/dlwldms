import ProjectNav from "components/common/ProjectNav/ProjectNav"
import "./AboutMain.css"

export default function AboutMain(){
    return(
        <div className="AboutMain section" id="about">
            <h2>About</h2>
            <h3 className="font_Serenity">"형태를 빚는 감각에서<span>기능을 구현하는 논리로"</span></h3>
            <div className="about_textbox">
                <p><span>CERAMIC ART(1)</span>도예를 전공하며 조형적 예술에 대한 기초와 감각을 익혔습니다. <span>GRAPHIC DESIGN(2)</span> 전공 수업을 통해 평면 디자인의 원리를 깨닫고 디지털 그래픽을 시작했습니다. <span>WEB DESIGN(3)</span> 졸업 후 웹 디자인 시스템을 학습하며 사용자 중심의 인터페이스를 설계했습니다. <span>WEB PUBLISHING(4)</span> 디자인을 직접 구현하고자 HTML/CSS를 익히며 웹 표준을 학습했습니다. <span>INTERACTIVE CODING(5)</span> 현재는 모든 기기에 최적화된 반응형 웹과 생동감 있는 인터랙션을 구현합니다.</p>
            </div>
            <ProjectNav />
        </div>
    )
}