import { useLoaderData } from "react-router-dom";
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
import { AuthContext } from "../provider/AuthProvider";

const AddVolunteers = () => {
    const volunteerPost = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user.email)

    const handleAddVolunteers = e =>{
        e.preventDefault();
        const postTitle = e.target.title.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const location = e.target.location.value;
        const quantity = e.target.quantity.value;
        const deadline = e.target.deadline.value;
        const organizerName = e.target.organizerName.value;
        const organizerEmail = user?.email;
        const photo = e.target.photo.value;
 
        const adddata = {postTitle, description, category, location, quantity, deadline, organizerName, organizerEmail, photo }
 
        // send data to the server
        fetch('http://localhost:5000/addVolunteers', {
            method: 'POST',
            headers:{'content-type' : 'application/json'},
            body:JSON.stringify(adddata)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data?.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Your post added successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
        })
    }
    return (
        <div className="border rounded-xl w-4/5 lg:w-3/5 mx-auto p-6 mt-8">
        <Helmet>
                <title>Helps Hand Network/Add Volunteer</title>
              </Helmet>
              <div className="text-center">
                <div className="space-y-2 col-span-full  mb-4">
                  <p className="font-medium">Be a Volunteer</p>
                  
                </div>
                <div className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm ">
                  <form onSubmit={handleAddVolunteers} className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
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
                        placeholder="Name of service"
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
                        placeholder="Description"
                        className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                      >
                        </input>
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
                        placeholder="Category"
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
                        placeholder="Location"
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
                        placeholder="Quantity"
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
                      <input
                        name="deadline"
                        type="text"
                        placeholder="Deadline"
                        className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                      />
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
                        placeholder="Your Name"
                        className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                      >
                      </input>
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
                      >
                      </input>
                    </div> 
                    {/* Thumbnail */}
                    <div className="col-span-full">
                      <label htmlFor="bio" className="text-sm p-1 flex justify-start">
                      Thumbnail
                      </label>
                      <input
                        name="photo"
                        placeholder="Photo URL"
                        className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                      ></input>
                    </div>
                    {/* add button */}
                    <div className="col-span-full mt-5">
                      <button
                        type="submit"
                        value="Add Coffee"
                        className="bg-violet-400 rounded-md btn btn-block p-3"
                      >Request</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
    );
};

export default AddVolunteers;