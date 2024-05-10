import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";


const Home = () => {
    const volunteers = useLoaderData();
    const needVolunteers = volunteers.slice(0, 6);
    return (
        <div>
            <Banner></Banner>
            <div>
            <div className="mt-10 container mx-auto">
        <h1 className="text-4xl text-center p-4">Craft Items</h1>
        <p className="text-center w-80 lg:w-full mx-auto">
          Crafts according to your needs.We promise to deliver quality &
          creativity
        </p>
        <div className="container md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 mx-auto gap-6 justify-around">
          {needVolunteers.map((volunteer) => (
            <div key={volunteer._id}>
              <div className="card rounded-md w-96 md:w-80 lg:w-96 bg-base-100 shadow-xl mx-auto ">
                <figure>
                  <img src={volunteer.thumbnail} alt="images" className="h-72 w-full myChoice" />
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
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
        <Link to="/needVolunteers"><button className="btn btn-primary mx-auto">See All</button></Link>
        </div>
      </div>
            </div>
            
        </div>
    );
};

export default Home;