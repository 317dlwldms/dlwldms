import logo0 from "asset/images/work/web/0_logo.jpg";
import logo1 from "asset/images/work/web/1_logo.jpg";
import logo2 from "asset/images/work/web/2_logo.jpg";
import logo3 from "asset/images/work/web/3_logo.jpg";
import img0_0 from "asset/images/work/web/0_img0.jpg";
import img0_1 from "asset/images/work/web/0_img2.jpg";
import img1_0 from "asset/images/work/web/1_img0.jpg";
import img1_1 from "asset/images/work/web/1_img1.jpg";
import img1_2 from "asset/images/work/web/1_img2.jpg";
import img3_0 from "asset/images/work/web/3_img0.jpg";
import img3_1 from "asset/images/work/web/3_img1.jpg";

export const projectList = [
    {
        id: "0",
        title: "MCA",
        slug: "mca-ceramic-art",
        logo: logo0,
        overview: "MCA 월간도예 매거진 홈페이지 리디자인",
        keyFeatures: { label : "Geolocation API, Weather API", text: <p>사용자의 위치에 따라 현재 날씨를 가져오고, 권한이 없는 경우에도 서비스가 동작하도록 예외 처리를 두어 구현하였습니다.<br/> - 위치와 날씨를 반영하여 상황에 맞는 플레이리스트를 추천함</p>},
        github: {url: "https://github.com/317dlwldms/MCA", text: "github.com/317dlwldms/MCA"},
        figma: {url: "https://www.figma.com/design/9Qk0zU4IAKvTTfC2UUcdOV/%EC%9B%94%EA%B0%84%EB%8F%84%EC%98%88?m=auto&t=IW5x4MNs16IghdQd-6", text: "figma.com/MCA"},
        notion: "",
        stack: [
            "HTML5","CSS3","JavaScript","React","Figma","Photoshop"
        ],
        nextSteps: "뉴스, 정보소식같은 페이지에서 각 요소마다 주제를 분석해 더 세분화해서 볼 수 있는 구성을 설계해야함 ",
        imgs: [
            img0_0,
            img0_1
        ],
    },
    {
        id: "1",
        title: "TIK-TOK",
        slug: "tik-tok",
        logo: logo1,
        overview: "위치와 시간을 기반으로 상황에 맞는 음악을 추천하는 웹 프로젝트",
        keyFeatures: { label : "Geolocation API, Weather API, Spotify API", text: <p>- 사용자의 위치에 따라 현재 날씨를 가져오고, 권한이 없는 경우에도 서비스가 동작하도록 예외 처리를 두어 구현하였습니다.<br/>- 위치와 날씨를 반영하여 상황에 맞는 플레이리스트를 추천함</p>},
        github: {url: "https://github.com/317dlwldms/tik-tok", text: "github.com/317dlwldms.tik-tok"},
        figma: {url: "https://www.figma.com/design/puTo3ssrgm6QfRybHKslne/Tik-Tok?m=auto&t=IW5x4MNs16IghdQd-6", text: "figma.com/tik-tok"},
        notion: "",
        nextSteps: "Spotify API의 추천 알고리즘이 날씨, 시간을 충분히 반영하지 않는 한계를 발견하였습니다. 이를 보완하기 위해 자체 추천 로직 설계를 다음 프로젝트 과제로 설정하였습니다.",
        stack: [
            "HTML5","CSS3","JavaScript","REST_API","Figma","Photoshop", "Illustrator"
        ],
        imgs: [
            img1_0,
            img1_1,
            img1_2
        ],
    },
    {
        id: "2",
        title: "Blog",
        slug: "own-blog-page",
        logo: logo2,
        overview: "웹 디자인 과정을 거쳐 처음으로 작업한 웹사이트입니다. 1500px 이상의 화면에서 최적화된 페이지입니다. 1500px 이하일 경우 오류는 없지만 보기에 불편할 수 있습니다.",
        keyFeatures: { label : "Geolocation API, Weather API,", text: "사용자의 위치에 따라 현재 날씨를 가져오고, 권한이 없는 경우에도 서비스가 동작하도록 예외 처리를 두어 구현하였습니다. "},
        github: "",
        notion: {url: "https://www.figma.com/design/3uZs6hbk2lGoJEn7SB16Al/Blog?m=auto&t=IW5x4MNs16IghdQd-6", text: "figma.com/blog"},
        figma: "",
        stack: [
            "HTML5","CSS3","j-Query","Photoshop", "Illustrator"
        ],
        nextSteps: "Spotify API ",
        imgs: [
            img0_1,
            img1_1
        ],
    },
    {
        id: "3",
        title: "AKMU",
        slug: "akmu-album-page",
        logo: logo3,
        overview: "아티스트 앨범을 소개하는 웹페이지",
        keyFeatures: { label : "Geolocation API, Weather API,", text: "사용자의 위치에 따라 현재 날씨를 가져오고, 권한이 없는 경우에도 서비스가 동작하도록 예외 처리를 두어 구현하였습니다. "},
        github: {url: "https://github.com/317dlwldms/akmu",text: "github.com/dlwldms/akmu"},
        notion: "",
        figma: "",
        stack: [
            "HTML5","CSS3","j-Query","Photoshop", "Illustrator"
        ],
        nextSteps: "웹 개발에 대채 처음 배우면서 제작한 프로젝트이기 때문에 고칠 점은 많지만 더 나아지는 과정을 보여주기 위해 추가하였다.",
        imgs: [
            img3_0,
            img3_1
        ],
    },
]