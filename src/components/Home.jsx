import Banner from "./Banner";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToastContainer />
        </div>
    );
};

export default Home;