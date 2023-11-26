import { Link } from "react-router-dom";


const TourTypes = ({ tour }) => {
    const { icon, tourType } = tour;
    return (
        <div>
            <Link to={`/tourPackages/${tourType}`}>
                <div className="card w-40 h-40 text-center cursor-pointer rounded-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className="text-3xl">{icon}</p>
                        <p>{tourType}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default TourTypes;