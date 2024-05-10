import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center ">
            <h2 className="text-5xl mt-40 font-extrabold">Oops!!!</h2>
            <h3 className="my-4 text-2xl">Page Not Found</h3>
            <Link to="/" className="text-blue-500 ">Click here to go back</Link>
       </div>
    );
};

export default ErrorPage;