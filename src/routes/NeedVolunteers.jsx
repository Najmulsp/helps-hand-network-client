import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const NeedVolunteers = () => {
  const volunteers = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home/ Need Volunteers</title>
      </Helmet>
      <div>
        <h1>
          Search Functionality: On the top of this page, you need to implement
          search functionality through a search input based on the Post Title.
          You can implement it through the backend.
        </h1>
      </div>
      <div className="container md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 mx-auto gap-6 justify-around">
        {volunteers.map((volunteer) => (
          <div key={volunteer._id}>
            <div className="card rounded-md w-96 md:w-80 lg:w-96 bg-base-100 shadow-xl mx-auto ">
              <figure>
                <img
                  src={volunteer.thumbnail}
                  alt="images"
                  className="h-72 w-full myChoice"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {volunteer.postTitle}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="font-normal">
                  <span className="font-bold">Category: </span>
                  {volunteer.category}
                </p>
                <p className="font-normal">
                  <span className="font-bold">Deadline: </span>
                  {volunteer.deadline}
                </p>
                <Link to={`/postDetails/${volunteer._id}`}>
                  <button className="btn btn-secondary">Post Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeedVolunteers;
