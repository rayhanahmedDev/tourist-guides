
const ViewPackage = ({ view }) => {
    const { img } = view
    return (
        <div>
            <div>
                <img className="w-[400px] h-[300px] pb-3" src={img} alt="" />
            </div>
        </div>
    );
};

export default ViewPackage;