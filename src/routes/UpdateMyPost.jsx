import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const UpdateMyPost = () => {
  const [startDate, setStartDate] = useState(new Date());

  const { user } = useContext(AuthContext);
  const singlePost = useLoaderData();
 

  const handleUpdate = (e) => {
    e.preventDefault();
    const postTitle = e.target.title.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const location = e.target.location.value;
    const quantity = e.target.quantity.value;
    const deadline = startDate;
    const organizerName = e.target.organizerName.value;
    const organizerEmail = user?.email;
    const photo = e.target.photo.value;

    const updateVolunteer = {
      postTitle,
      description,
      category,
      location,
      quantity,
      deadline,
      organizerName,
      organizerEmail,
      photo,
    };

    // send data to the server
    fetch(`http://localhost:5000
/updateVolunteerInfo/${singlePost?._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateVolunteer),
    }, {Credentials: "include"})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount) {
          Swal.fire({
            title: "success!",
            text: "Your Volunteer Info updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="border rounded-xl w-4/5 lg:w-3/5 mx-auto p-6 mt-8">
      <Helmet>
        <title>Home/Add Volunteer</title>
      </Helmet>
      <div className="text-center">
        <div className="space-y-2 col-span-full  mb-4">
          <p className="font-medium text-2xl">Update Your Post</p>
        </div>
        <div className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm ">
          <form
            onSubmit={handleUpdate}
            className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
          >
            {/* Post Title */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="username"
                className="text-sm p-1 flex justify-start"
              >
                Post Title
              </label>
              <input
                name="title"
                type="text"
                defaultValue={singlePost.postTitle}
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            {/* Description */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                Description
              </label>
              <input
                name="description"
                type="text"
                defaultValue={singlePost.description}
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              ></input>
            </div>
            {/* Category */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                Category
              </label>
              <input
                name="category"
                type="text"
                defaultValue={singlePost.category}
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            {/* Location */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                Location
              </label>
              <input
                name="location"
                type="text"
                defaultValue={singlePost.location}
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            {/* No. of volunteers needed */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                No. of volunteers needed
              </label>
              <input
                name="quantity"
                type="text"
                defaultValue={singlePost.quantity}
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            {/* Deadline*/}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                Deadline
              </label>
              <DatePicker
              className="border-2 p-3 rounded-md w-80"
              selected={startDate} onChange={(date) => setStartDate(date)} />

            </div>
            {/* Organizer name */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                Organizer name
              </label>
              <input
                name="organizerName"
                type="text"
                defaultValue={user?.displayName || "Your Name"}
                className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              ></input>
            </div>
            {/* Organizer  email */}
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="website"
                className="text-sm p-1 flex justify-start"
              >
                Organizer email
              </label>
              <input
                name="organizerEmail"
                type="email"
                defaultValue={user?.email}
                readOnly
                className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              ></input>
            </div>
            {/* Thumbnail */}
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm p-1 flex justify-start">
                Thumbnail
              </label>
              <input
                name="photo"
                defaultValue={singlePost?.photo}
                className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              ></input>
            </div>
            {/* add button */}
            <div className="col-span-full mt-5">
              <button
                type="submit"
                value="Add Coffee"
                className="bg-violet-400 rounded-md btn btn-block p-3"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMyPost;
