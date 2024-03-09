import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RoadMap from './RoadMap';
import CourseTemplate from './CourseTemplate';

const RoadMapList = ({ cName }) => {
    const [roadmapData, setRoadmapData] = useState([]);
    const courseName = useParams().slug;
    console.log("cname :-----------------------------", courseName);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("allroad map list data is : -----------", data);
                setRoadmapData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <CourseTemplate/>
    );
};

export default RoadMapList;