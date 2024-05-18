import { Link } from "react-router-dom";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import { GiSelfLove } from "react-icons/gi";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

  const [volunteers, setVolunteers] = useState(null)
  const needVolunteers = volunteers?.slice(0, 6);
  const [sort, setSort] = useState('1')


    useEffect( () => {
      
          axios.get(`https://helps-hand-network-server.vercel.app
/volunteers?sort=${sort}`)
.then(data => {

  setVolunteers(data.data)
})

      
    }, [sort] )


  return (
    <div>
      <Helmet>
        <title>Helps Hand Network/ Home</title>
      </Helmet>
      <Banner></Banner>
      <div>
        <div className="mt-10 container mx-auto">
          <h1 className="text-4xl font-bold text-center p-4">Our Programs</h1>
          <p className="text-center w-80 lg:w-full mx-auto">
            We Needs Volunteers for the Upcoming Events
          </p>
          <div className="text-right mr-12">
            <select
            onChange={e =>{
              setSort(e.target.value)
            }}
            value={sort}
             name="sort"
              id="sort"
               className="border rounded-lg p-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800">
              <option value="">Sort By Deadline</option>
              <option value="dsc">Descending Order</option>
              <option value="asc">Ascending Order</option>
            </select>
          </div>
          <div className="container md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 mx-auto gap-6 justify-around">
            {needVolunteers?.map((volunteer) => (
              <div key={volunteer._id}>
                <div className="card rounded-md w-96 md:w-80 lg:w-96 bg-base-100 shadow-xl mx-auto text-center">
                  <figure>
                    <img
                      src={volunteer.thumbnail}
                      alt="images"
                      className="h-72 w-full myChoice"
                    />
                  </figure>
                  <div className=" text-center  flex justify-between  ml-8  ">
                    <p className="py-2 text-purple-500 font-bold"><span className="">Status:</span> Requested</p>
                    <p className=" w-32 bg-purple-700 text-white rounded-l-full py-2">{volunteer.location}</p>
                  </div>
                  <div className="card-body mx-auto">
                    <h2 className="card-title">
                      {volunteer.postTitle}
                      
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
                  <Link to={`/postDetails/${volunteer?._id}`}>
                      <button className="btn hover:bg-gradient-to-br focus:ring-purple-300 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
                        Post Details
                      </button>
                    </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/needVolunteers">
              <button className="btn bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 mx-auto">See All</button>
            </Link>
          </div>
        </div>
      </div>
      {/* donation */}

      <section className=" bg-purple-100 bg-opacity-70 mt-10">
        <div className="container flex flex-col justify-center items-center p-2 mx-auto sm:py-3 lg:py-6 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 ">
            <img
              src="https://i.ibb.co/jfN8VKx/donation.jpg"
              alt=""
              className="object-contain h-full pt-7"
            />
          </div>
          {/* donate form */}
          <div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left">
            <div className="p-6">
              <form
                noValidate=""
                action=""
                className="container flex flex-col mx-auto space-y-12"
              >
                <h1 className="text-2xl lg:text-4xl text-center font-bold">
                  Make a Donation Now!
                </h1>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-2">
                      <input
                        id="city"
                        type="text"
                        placeholder="$100"
                        className="w-full pl-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                      <input
                        id="state"
                        type="text"
                        placeholder="$200"
                        className="w-full pl-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                      <input
                        id="zip"
                        type="text"
                        placeholder="$300"
                        className="w-full pl-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                      />
                    </div>
                    <div className="col-span-full">
                      <input
                        id="address"
                        type="text"
                        placeholder="Enter Other Amount"
                        className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <input
                        type="text"
                        placeholder="First name"
                        className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <input
                        type="text"
                        placeholder="Last name"
                        className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <input
                        id="email"
                        type="number"
                        placeholder="Phone"
                        className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                      />
                    </div>
                    <div className="col-span-full">
                      <select
                        name=""
                        id=""
                        className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75"
                      >
                        <option value="">Select Payment Method</option>
                        <option value="">Payoneer</option>
                        <option value="">Payza</option>
                        <option value="">Paypal</option>
                      </select>
                    </div>
                    <div className="relative  w-40 col-span-full sm:col-span-2">
                      <button className="btn bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 w-full px-4">Donate Now</button>
                      <GiSelfLove className="absolute top-5 right-1 "/>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* meet our volunteers */}
      <section className="py-2 mt-10 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4">
			<h3 className="text-2xl text-center font-bold leading-none sm:text-5xl">Meet Our Volunteers</h3>
			<p className="max-w-2xl text-center mx-auto dark:text-gray-600">Welcome to Helps hand network, where every volunteer becomes a catalyst for change. Join us in our journey to transform lives, one act of kindness at a time</p>
		</div>
		<div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://i.ibb.co/6YXKcrK/volunteeer-111y.jpg" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">Md. Al-amin</h4>
					<p className="text-sm dark:text-gray-600">Social Worker</p>
					<div className="flex mt-2 space-x-2">
						<a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-4 h-4">
								<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
							</svg>
						</a>
						<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
								<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
							</svg>
						</a>
						<a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://i.ibb.co/4MpSMKj/volunteeer-444y.jpg" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">ATM Soyaib</h4>
					<p className="text-sm dark:text-gray-600">Social Worker</p>
					<div className="flex mt-2 space-x-2">
						<a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-4 h-4">
								<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
							</svg>
						</a>
						<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
								<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
							</svg>
						</a>
						<a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://i.ibb.co/4gYj80z/volunteeer-331y.jpg" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">Rakibul Islam</h4>
					<p className="text-sm dark:text-gray-600">Social Worker</p>
					<div className="flex mt-2 space-x-2">
						<a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-4 h-4">
								<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
							</svg>
						</a>
						<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
								<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
							</svg>
						</a>
						<a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://i.ibb.co/cvdkN9d/volunteeer-444y.jpg" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">Mahmud Hasan</h4>
					<p className="text-sm dark:text-gray-600">Social Worker</p>
					<div className="flex mt-2 space-x-2">
						<a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-4 h-4">
								<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
							</svg>
						</a>
						<a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
								<path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
							</svg>
						</a>
						<a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
								<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
			
			
		</div>
	</div>
</section>
    </div>
  );
};

export default Home;
