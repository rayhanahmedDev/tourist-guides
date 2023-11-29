

const TourPlan = ({tourPlan, des}) => {
    return (
        <div>
            <div className="mb-12 w-9/12 mx-auto">
                <div className="collapse collapse-arrow bg-base-100 py-8 mb-6">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-2xl font-bold ">
                        {tourPlan}
                    </div>
                    <div className="collapse-content">
                        <p>{des}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourPlan;