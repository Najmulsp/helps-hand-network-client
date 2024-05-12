import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center relative m-10">
            <img src="https://i.ibb.co/tCDjDLX/404-page-cover222.jpg" alt="" className="w-3/4 mx-auto h-96" />
            <Link to="/" className="absolute bottom-1 right-[28%] lg:right-[44%] text-blue-500 text-2xl">Click here to go back</Link>
       </div>
    );
};

export default ErrorPage;