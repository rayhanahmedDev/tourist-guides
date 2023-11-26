import { useEffect, useState } from "react";
import TouristStoryCard from "../../../Component/TouristStoryCard";


const TouristStory = () => {
    const [story, setStory] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/touristStory')
        .then(res => res.json())
        .then(data => setStory(data))
    },[])
    return (
        <div className="lg:h-[80vh] ">
            <dir>
                <h2 className="text-4xl font-bold text-center">Tourist Story</h2>
                <p className="lowercase text-center mt-3 px-4">INSPIRING TRAVEL EXPERIENCE STORIES ABOUT LIFE-CHANGING TRIPS</p>
            </dir>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
                {
                    story.map(stories =><TouristStoryCard key={stories._id} stories={stories}></TouristStoryCard>)
                }
            </div>
        </div>
    );
};

export default TouristStory;