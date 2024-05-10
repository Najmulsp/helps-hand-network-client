import { useLoaderData } from "react-router-dom";
import { useContext } from 'react';
import Swal from 'sweetalert2'

import { Helmet } from 'react-helmet-async';
import { AuthContext } from "../provider/AuthProvider";

const BeAVolunteer = () => {
    const volunteerPost = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleAVolunteer = e =>{
        e.preventDefault();
        
        

        const email = user.email;
        const name = e.target.name.value;
        const subcategory = e.target.subcategory.value;
        const price = e.target.price.value;
        const time = e.target.time.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const stockStatus = e.target.stockStatus.value;
        const userName = e.target.userName.value;
       
        const photo = e.target.photo.value;
        
        const newCraft = {name, subcategory, price, time, rating, description,stockStatus, userName, email,  photo }

    
        
        // send data to the server
        fetch('https://misty-mrittika.vercel.app/addCrafts', {
            method: 'POST',
            headers:{'content-type' : 'application/json'},
            body:JSON.stringify(newCraft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data?.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Your craft added successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
        })
    }
    return (
        <div className="border rounded-xl w-4/5 lg:w-3/5 mx-auto p-6 mt-8">
        <Helmet>
                <title>Helps Hand Network/ Be a Volunteer</title>
              </Helmet>
              <div className="text-center">
                <div className="space-y-2 col-span-full  mb-4">
                  <p className="font-medium">Be a Volunteer</p>
                  
                </div>
                <div className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm ">
                  <form onSubmit={handleAVolunteer} className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
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
                        placeholder="Name of Work"
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
                        placeholder="Quantity needed"
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
                    {/* volunteer name */}
                    <div className="col-span-full sm:col-span-3">
                      <label
                        htmlFor="website"
                        className="text-sm p-1 flex justify-start"
                      >
                        Volunteer name
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                      >
                      </input>
                    </div>
                    {/* Volunteer  email */}
                    <div className="col-span-full sm:col-span-3">
                      <label
                        htmlFor="website"
                        className="text-sm p-1 flex justify-start"
                      >
                        Volunteer email
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                      >
                      </input>
                    </div>
                          {/* Suggestion */}
                    <div className="col-span-full sm:col-span-3">
                      <label
                        htmlFor="website"
                        className="text-sm p-1 flex justify-start"
                      >
                        Suggestion
                      </label>
                      <input
                        name="suggestion"
                        type="text"
                        placeholder="Suggestion"
                        className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                      >
                      </input>
                    </div>
        
                    {/* Status*/}
                    <div className="col-span-full sm:col-span-3">
                      <label
                        htmlFor="website"
                        className="text-sm p-1 flex justify-start"
                      >
                        Status
                      </label>
                      <input
                        name="status"
                        type="text"
                        placeholder="Status"
                        className="w-full border-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                      />
                    </div>
        
                    
                    {/* Thumbnail */}
                    <div className="col-span-full">
                      <label htmlFor="bio" className="text-sm p-1 flex justify-start">
                      Thumbnail
                      </label>
                      <input
                        name="photo"
                        placeholder="URL of photo"
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

export default BeAVolunteer;