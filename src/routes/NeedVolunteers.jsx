import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link} from "react-router-dom";
import { FaStackExchange } from "react-icons/fa";
import axios from "axios";
// import { AuthContext } from "../provider/AuthProvider";

const NeedVolunteers = () => {
  // const {user} = useContext(AuthContext)
  const [layoutMode, setLayoutMode] = useState("card");
  const [volunteers, setVolunteers] = useState(null);
  const [search, setSearch] = useState("");
  // const [needPosts, setNeedPosts] = useState(null)
  

  useEffect(()=>{
    axios.get(`http://localhost:5000/needPosts?search=${search}`)
    .then(data => {
      // console.log(data)
      setVolunteers(data.data)
    })
  }, [search])

 
  

  // if(volunteers.length > 0){
  //   setNeedPosts(volunteers)
  // }
  // else{
  //   return <>
  //   <p className="text-center">At this service are not available, there is no events next, You can not be a volunteer right now, try next time</p>
  //   </>
  // }
  // search by volunteer need post category
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;

    setSearch(search);
  };

  // Function to toggle layout mode
  const toggleLayout = () => {
    setLayoutMode((prevMode) => (prevMode === "card" ? "table" : "card"));
  };

  return (
    <div>
      <Helmet>
        <title>Home/ Need Volunteers</title>
      </Helmet>
      <form onSubmit={handleSearch} className="relative text-center mt-6">
        <input type="text" name="search" className="border p-4 w-96 rounded-full" />
        <button className="absolute btn rounded-r-full  bg-purple-600 right-[452px] top-1 ">Search</button>
      </form>
      <div>
        <div className="text-right relative">
          <button onClick={toggleLayout} className="btn bg-purple-500 w-44  p-2">
            Change Layout
          </button>
          <FaStackExchange className="absolute right-36 top-5 text-orange-500" />
        </div>
         {layoutMode === "card" ? (
          <div className="container md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 mx-auto gap-6 justify-around">
            {volunteers?.map((volunteer) => (
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
                    <h2 className="card-title">{volunteer.postTitle}</h2>
                    <p className="font-normal">
                      <span className="font-bold">Category: </span>
                      {volunteer.category}
                    </p>
                    <p className="font-normal">
                      <span className="font-bold">Deadline: </span>
                      {volunteer.deadline}
                    </p>
                    <Link to={`/postDetails/${volunteer._id}`}>
                      <button className="btn bg-purple-600">
                        Post Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">
              Invoices
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-24" />
                </colgroup>
                <thead className="dark:bg-gray-300">
                  <tr className="text-left">
                    <th className="p-3">Photo</th>
                    <th className="p-3">Title</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Deadline</th>
                    <th className="p-3 text-right">Amount</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                {volunteers?.map((volunteer) => (
                  <tbody key={volunteer._id}>
                    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                      <td className="p-3">
                        <img
                          src={volunteer.photo}
                          alt=""
                          className="w-20 h-20 rounded-lg"
                        />
                      </td>
                      <td className="p-3">
                        <p>{volunteer.postTitle}</p>
                      </td>
                      <td className="p-3">
                        <p>{volunteer.category}</p>
                      </td>
                      <td className="p-3">
                        <p>{volunteer.deadline}</p>
                      </td>
                      <td className="p-3 text-right">
                        <p>$15,792</p>
                      </td>
                       
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        )} 
      </div>
    </div>
  );
};

export default NeedVolunteers;
