import { Link } from "react-router-dom";


const AllStory = ({ stories }) => {
    const { _id, description, title } = stories;
    return (
        <div>
            <Link to={`/storyDetails/${_id}`}>
                <div className="card h-60 md:h-64 mx-8 lg:mx-0 md:mx-2 cursor-pointer bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-medium">{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AllStory;