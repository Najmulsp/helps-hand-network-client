import { useEffect, useState } from "react";


const Blog = () => {

    const [blogs, setBlogs] = useState()
    console.log(blogs)
    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setBlogs(data)
        })
    }, [])



    return (
        <section>
            <div className="text-center py-4">
                <h1 className="text-4xl font-bold pb-4">Take a look to our blogs</h1>
                <p>add your blog, your blog can up moral of others</p>
                
            </div>
            <div className="text-right">
            <button className="btn hover:bg-gradient-to-br focus:ring-purple-300 bg-gradient-to-r from-purple-500 via-purple-800 to-purple-500 w-44  p-2">Add a Blog</button>
            </div>
            <div className="container mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                blogs?.map(blog => 
                    <div key={blog._id} className="dark:bg-gray-100 dark:text-gray-900 border">
	<div className="container grid grid-cols-12 grid-rows-1 mx-auto dark:bg-gray-50">
		<div className=" dark:bg-gray-300 w-11/12 col-span-5">
            <img src="https://i.ibb.co/ZHkq2Jg/Healthcare3333.jpg" alt="" className=" h-full" />
        </div>
		<div className="flex flex-col p-3 row-span-12 col-span-7 ">
			<div className="flex justify-start">
				<span className="px-2 py-1 text-xs rounded-full dark:bg-violet-600 dark:text-gray-50">{blog.blogType}</span>
			</div>
			<h1 className="text-3xl font-semibold">{blog.name}</h1>
			<p className="flex-1 pt-2">{blog.description}</p>
			<a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-600">
				<span>Read more</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-600">
						<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
					</svg>
					<span className="self-center text-sm">by {blog.blogger}</span>
				</div>
				<span className="text-xs">{blog.readTime} read</span>
			</div>
		</div>
	</div>
</div>
                )
            }
        </div>


        {/* <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {
            blogs?.map(blog=> 
                <a key={blog._id} rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-5 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-7">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
				<span className="text-xs dark:text-gray-600">February 19, 2021</span>
				<p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
			</div>
		</a>
            )
        }
        </div> */}
        </section>
    );
};

export default Blog;