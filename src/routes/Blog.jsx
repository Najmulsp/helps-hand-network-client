import { useContext, useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Blog = () => {
  const [blogs, setBlogs] = useState();
  console.log(blogs);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);


  const {user} = useContext(AuthContext);
  console.log(user)

  const handleAddBlog = e =>{
      e.preventDefault();

      const postTitle = e.target.title.value;
      const description = e.target.description.value;
      const category = e.target.category.value;
      
      const volunteerEmail = user?.email;
      
      const photo = e.target.photo.value;
     
      
      
      const newRequest = {postTitle, description, category, location,  volunteerEmail, photo }

  
      
      // send data to the server
      fetch('http://localhost:5000/blogs', {
          method: 'POST',
          headers:{'content-type' : 'application/json'},
          body:JSON.stringify(newRequest)
      }, {Credentials: "include"})
      .then(res => res.json())
      .then(data => {
          console.log(data)
          if(data?.insertedId){
            toast("Your blog has been saved")
            // Swal.fire({
            //     position: "top-end",
            //     icon: "success",
            //     title: "Your blog has been saved",
            //     showConfirmButton: false,
            //     timer: 1500
            //   });
          }
      })
    }

    const handleRemoveBlog = id => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, remove it!',
        }).then(result => {
          if (result.isConfirmed) {
            fetch(
              `http://localhost:5000/blogs/${id}`,
              {
                method: 'DELETE',
              }
            )
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  const remaining = blogs.filter(
                    myPost => myPost._id !== id
                  );
                  setBlogs(remaining);
                  Swal.fire({
                    title: 'Deleted!',
                    text: 'Your blog has been removed.',
                    icon: 'success',
                  });
                }
              });
          }
        });
      };


  return (
    <section>
         <Helmet>
                <title>Home/ Blog</title>
              </Helmet>
      <div className="text-center py-4">
        <h1 className="text-4xl font-bold pb-4">Take a look to our blogs</h1>
        <p>add your blog, your blog can up moral of others</p>
      </div>
      <div className="text-right">
        <button className="">
          
        </button>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn hover:bg-gradient-to-br focus:ring-purple-300 bg-gradient-to-r from-purple-500 via-purple-800 to-purple-500 w-44  py-2"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
         Add Your Blog
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 h-96 max-w-5xl">
            <h3 className="font-bold text-center text-lg">Give your blog data here</h3>
            <div className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm ">
                  <form onSubmit={handleAddBlog} className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        {/* Blog Title */}
                    <div className="col-span-full sm:col-span-3">
                      <label
                        htmlFor="username"
                        className="text-sm p-1 flex justify-start"
                      >
                       Blog Title
                      </label>
                      <input
                        name="title"
                        type="text"
                        placeholder="Name of your blog"
                       
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
                        placeholder="Write here what you want"
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
                        placeholder="What kind of blog it is?"
                        className="w-full border-2  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300 p-3"
                      />
                    </div>
                    
                  
                   
                    {/* Volunteer  email */}
                    <div className="col-span-full sm:col-span-3">
                      <label
                        htmlFor="website"
                        className="text-sm p-1 flex justify-start"
                      >
                        Your email
                      </label>
                      <input
                        name="email"
                        type="email"
                        defaultValue={user?.email}
                        
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
                        className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:text-black rounded-md btn btn-block p-3"
                      >Add Blog</button>
                    </div>
                  </form>
                </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:text-black rounded-md btn-block p-3">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className="container mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {blogs?.map((blog) => (
          <div
            key={blog._id}
            className="dark:bg-gray-100 dark:text-gray-900 border"
          >
            <div className="container grid grid-cols-12 grid-rows-1 mx-auto dark:bg-gray-50">
              <div className=" dark:bg-gray-300 w-11/12 col-span-5">
                <img
                  src="https://i.ibb.co/ZHkq2Jg/Healthcare3333.jpg"
                  alt=""
                  className=" h-full"
                />
              </div>
              <div className="flex flex-col p-3 row-span-12 col-span-7 ">
                <div className="flex justify-start">
                  <span className="px-2 py-1 text-xs rounded-full dark:bg-violet-600 dark:text-gray-50">
                    {blog.blogType}
                  </span>
                </div>
                <h1 className="text-3xl font-semibold">{blog.name}</h1>
                <p className="flex-1 pt-2">{blog.description}</p>
                <div className="flex justify-between items-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-600"
                >
                  <span>Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                </a>
                <p><span className="text-xs">{blog.readTime} read</span></p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 dark:text-gray-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="self-center text-sm">
                      by {blog.blogger}
                    </span>
                  </div>
                  <button
                  onClick={()=>{handleRemoveBlog(blog._id)}}
                  className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 hover:bg-gradient-to-br focus:ring-orange-300 dark:text-black rounded-md">Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Blog;
