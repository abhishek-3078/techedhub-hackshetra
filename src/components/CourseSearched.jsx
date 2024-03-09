import './CourseSearched.css';
import { useParams } from 'react-router-dom';
import RoadMapUnit from './RoadMapUnit';
import TutorialUnit from './TutorialUnit';
import { Link } from 'react-router-dom';
const CourseSearched = () => {
    const { slug } = useParams();
    console.log("slug--------------------",slug);
    return (
        <div className="parent flex w-screen h-[90vh] items-center">
            <div className="roadmapPart w-[50%] flex-col overflow-auto space-y-3">
                <h3 className='text-white text-center'>RoadMaps</h3>
                {/* <button onClick={()=>window.open(/course/${slug}/roadmaplist,'_self')}>RoadMaps</button> */}
                <Link to={`/course/${slug}/roadmaplist`} className='no-underline'><RoadMapUnit/></Link>
                <RoadMapUnit/>
                <RoadMapUnit/>
                <RoadMapUnit/>
                <RoadMapUnit/>
                <RoadMapUnit/>
                <RoadMapUnit/>
            </div>
            <div className="separator"></div>
            <div className="coursePart w-[50%] flex-col overflow-auto space-y-3">
                {/* <button>Tutorials</button> */}
                <h3 className='text-white text-center'>Tutorials</h3>
                <TutorialUnit/>
                <TutorialUnit/>
                <TutorialUnit/>
                <TutorialUnit/>
                <TutorialUnit/>
                <TutorialUnit/>
                <TutorialUnit/>
                <TutorialUnit/>
                <TutorialUnit/>
                <TutorialUnit/>
                <TutorialUnit/>
            </div>
        </div>
    )
}
export default CourseSearched;