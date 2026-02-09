import logo0 from "asset/images/project/0_logo.jpg";
import logo1 from "asset/images/project/1_logo.jpg";
import logo2 from "asset/images/project/2_logo.jpg";
import logo3 from "asset/images/project/3_logo.jpg";
import img0_0 from "asset/images/project/0_img0.jpg";
import img0_1 from "asset/images/project/0_img2.jpg";
import img1_0 from "asset/images/project/1_img0.jpg";
import img1_1 from "asset/images/project/1_img1.jpg";
import img1_2 from "asset/images/project/1_img2.jpg";
import img3_0 from "asset/images/project/3_img0.jpg";
import img3_1 from "asset/images/project/3_img1.jpg";
import homeImg0 from "asset/images/project/0_imghome.png";
import homeImg1 from "asset/images/project/1_imghome.png";
import homeImg2 from "asset/images/project/2_imghome.png";
import homeImg3 from "asset/images/project/3_imghome.png";

export const projectList = [
    {
        id: "2",
        title: "MCA",
        slug: "mca-ceramic-art",
        logo: logo0,
        overview: "MCA 월간도예 매거진 웹사이트 리디자인",
        keyFeatures: { label : "react-router-dom [useParams] · 데이터 바인딩", text: <div className="kF_text"><p><span>·</span>사용자가 특정 이미지를 클릭하면 해당 데이터와 연결된 정보를 실시간으로 불러와 화면에 렌더링합니다.</p><p><span>·</span>매달 추가되는 잡지 데이터를 일관된 포맷으로 유지할 수 있으며, 수정 및 유지보수에 용이합니다.</p></div>},
        github: {url: "https://github.com/317dlwldms/mca", text: "317dlwldms/mca"},
        notion: {url: "https://obtainable-shallot-6b9.notion.site/MCA-2fda8ff395ee818eba63debda59fbe11", text: "[🍶 MCA] - 프로젝트 노트"},
        figma:"",
        stack: [
            "React","SCSS","HTML5","CSS3", "JavaScript","Figma","Photoshop"
        ],
        nextSteps: "뉴스, 정보소식 페이지에서 각 요소마다 주제를 분석해 더 세분화해서 볼 수 있는 구성을 설계",
        url: "https://dlwldms.com/mca",
        imgs: [
            img0_0,
            img0_1
        ],
        homeImg: homeImg0,
    },
    {
        id: "1",
        title: "Tik-Tok",
        slug: "tik-tok",
        logo: logo1,
        overview: "위치와 시간을 기반으로 상황에 맞는 음악을 추천하는 웹사이트",
        keyFeatures: { label : "Geolocation API · Weather API · Spotify API", text: <div className="kF_text"><p><span>·</span>사용자의 위치에 따라 현재 날씨를 가져오고, 권한이 없는 경우에도 서비스가 동작하도록 예외 처리를 두어 구현하였습니다.</p><p><span>·</span>위치와 날씨를 반영하여 상황에 맞는 플레이리스트를 추천합니다.</p></div>},
        github: {url: "https://github.com/317dlwldms/tik-tok", text: "317dlwldms.tik-tok"},
        notion: {url: "https://obtainable-shallot-6b9.notion.site/Tik-Tok-2fda8ff395ee81009823e55812a047bc", text: "[⏱️ Tik-Tok] - 프로젝트 노트"},
        figma: "",
        stack: [
            "REST API","JavaScript","SCSS","HTML5","CSS3","Figma","Photoshop", "Illustrator"
        ],
        nextSteps: "Spotify API의 추천 알고리즘이 날씨, 시간을 충분히 반영하지 않는 한계를 발견하였습니다. 이를 보완하기 위해 자체 추천 로직 설계를 다음 프로젝트 과제로 설정하였습니다.",
        url: "https://dlwldms.com/tik-tok",
        imgs: [
            img1_0,
            img1_1,
            img1_2
        ],
        homeImg: homeImg1,
    },
    {
        id: "0",
        title: "AKMU",
        slug: "akmu-album-page",
        logo: logo3,
        overview: "아티스트 앨범을 소개하는 웹사이트",
        keyFeatures: { label : "Horizontal Scroll", text: <div className="kF_text"><p><span>·</span>jQuery의 mousewheel 이벤트를 제어하여 사용자가 스크롤 할 때 한 섹션씩 자연스럽게 전환되도록 구현하였습니다.</p></div>},
        github: {url: "https://github.com/317dlwldms/akmu",text: "317dlwldms/akmu"},
        notion: {url: "https://obtainable-shallot-6b9.notion.site/Album-2fda8ff395ee814d9396c81d74386abc", text: "[🌱 AKMU] - 프로젝트 노트"},
        figma: "",
        stack: [
            "HTML5","CSS3","j-Query","Photoshop", "Illustrator"
        ],
        nextSteps: "웹 개발을 처음 배울 때 제작한 프로젝트로, width를 1500px로 고정해 작은 화면에서는 콘텐츠가 잘려보였다. 이 경험을 통해 반응형 레이아웃의 중요성을 생각하게 되었다.",
        url: "https://dlwldms.com/akmu",
        imgs: [
            img3_0,
            img3_1
        ],
        homeImg: homeImg3,
    },
    {
        id: "",
        title: "317dlwldms",
        slug: "317dlwldms",
        logo: logo2,
        overview: "개인 블로그 페이지 프로젝트 진행 중 입니다.",
        keyFeatures: "",// keyFeatures: { label : "Data Base[Supabase] ", text: <div className="kF_text"><p><span>·</span>Supabase를 활용한 REST API 연동으로 실시간 데이터 베이스 시스템을 구축하고, React 화면에 블로그 화면을 구현하였습니다.</p></div>},
        github: "",
        notion: "",
        figma: "",
        stack: "",
        nextSteps: "",// nextSteps: "데이터 베이스를 우회해서 활용하는 법을 배웠으니 데이터베이스에 대해 기본적인 것부터 배우기 시작해야겠다.",
        url: "",
        imgs: "",
        homeImg: homeImg2,
    },
]