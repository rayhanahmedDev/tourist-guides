

const ViewPackages = ({view}) => {
    const {img} = view;
    return (
        <div>
            <img className="w-[400px] h-[300px] pb-3" src={img} alt="" />
        </div>
    );
};

export default ViewPackages;