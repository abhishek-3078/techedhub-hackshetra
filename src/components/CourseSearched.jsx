import './CourseSearched.css';
import { useParams } from 'react-router-dom';

const CourseSearched = () => {
    const { slug } = useParams();
    console.log("slug--------------------",slug);
    return (
        <div className="parent flex w-screen h-[90vh] items-center">
            <div className="roadmapPart w-[50%] flex">
                <button className="absolute top-[80px] left-[565px] green-bg">+ Add Course</button>
                <button onClick={()=>window.open(`/course/${slug}/roadmaplist`,'_self')}>RoadMaps</button>
            </div>
            <div className="separator"></div>
            <div className="coursePart w-[50%] flex">
                <button>Tutorials</button>
            </div>
        </div>
    )
}
export default CourseSearched;