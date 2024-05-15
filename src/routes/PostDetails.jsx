import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const volunteerPost = useLoaderData();
  console.log(volunteerPost)

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
        <div className=" text-center  flex justify-between  ml-8  ">
                    <p className="py-2 text-purple-500 font-bold">We need total <span className="text-orange-500">{volunteerPost?.[0].quantity}</span>  volunteers</p>
                    <p className="px-1 w-32 bg-purple-700 text-white rounded-l-full py-2"><span className="">Status:</span> Requested</p>
                  </div>
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
            <span className="font-bold">Location </span>
            {volunteerPost?.[0].location}
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
