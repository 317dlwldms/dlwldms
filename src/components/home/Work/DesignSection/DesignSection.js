import Masonry from "react-masonry-css";
import "./DesignSection.css";
import { designList } from "data/designList";

export default function DesignSection(){
    const breakpointColumns = {
        default: 3,
        1200: 2,
        700: 1
    };
    return(
        <div className="DesignSection section">
            <h2>DESIGN SECTION</h2>
            <Masonry
                breakpointCols={breakpointColumns}
                className="gallery"
                columnClassName="gallery_column"
            >
                {designList.map(design => 
                    <div key={design.id} className="design">
                        <img src={design.src} alt={design.title} />
                    </div>
                )}
            </Masonry>
        </div>
    )
}