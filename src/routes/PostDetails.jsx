import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const volunteerPost = useLoaderData();

  // const {thumbnail, postTitle, category, deadline} = volunteerPost
  return (
    <div className=" lg:w-2/5 mx-auto mt-10">
      <Helmet>
        <title>Home/ My Post Details</title>
      </Helmet>
      <div className="card rounded-md  mx-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src={volunteerPost?.[0].thumbnail}
            alt="images"
            className="h-96 w-full"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title">
            <span className="font-bold">Name:</span>
            {volunteerPost?.[0].postTitle}
          </h1>
          <h2>
            <span className="font-bold">Category:</span>{" "}
            {volunteerPost?.[0].category}
          </h2>
          <div>
            <div className="flex justify-between">
              <p>
                <span className="font-bold">Deadline: </span>
                {volunteerPost?.[0].deadline}
              </p>
            </div>
          </div>
          <p>
            <span className="font-bold">Description: </span>
            {volunteerPost?.description}
          </p>
          <Link to={`/beAVolunteer/${volunteerPost?.[0]._id}`}>
            <button className="btn bg-purple-600">Be a Volunteer</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
