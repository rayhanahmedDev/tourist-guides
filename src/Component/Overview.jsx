

const Overview = () => {
    return (
        <div className="text-center mt-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold">Welcome to Overview</h2>
          <p>
            Here, you will find all the
            videos information to help
            kickstart your travel experience.
          </p>
          <div className="video-container mt-12 grid grid-cols-1 lg:grid-cols-2">
            {/* Include your engaging tourism videos here */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WF9HC8SSjZc?si=DI54NAJKob8cFr-I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aGiTs9huCOQ?si=z5jCSpK3_Xhprxvb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
    );
};

export default Overview;