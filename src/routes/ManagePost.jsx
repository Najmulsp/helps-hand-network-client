import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';

const ManagePost = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    if (user.email) {
      axiosSecure.get(`/manageMyPost?email=${user?.email}`).then(data => {
        console.log(data.data);
        setMyPosts(data.data);
      });
    }
  }, [user, axiosSecure]);

  const handleDeletePost = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000
/deleteMyPost/${id}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = myPosts.filter(myPost => myPost._id !== id);
              setMyPosts(remaining);
              Swal.fire({
                title: 'Deleted!',
                text: 'Your post has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Home/ My Post</title>
      </Helmet>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          You Can Update or Delete Your Post Here
        </h2>
        <div className="overflow-x-auto ">
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
                <th className="p-3">Thumbnail</th>
                <th className="p-3">Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Deadline</th>
                <th className="p-3">Location</th>
                <th className="p-3 text-center ">Status</th>
              </tr>
            </thead>
            {myPosts?.map(myPost => (
              <tbody key={myPost._id}>
                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <td className="p-3">
                    <img
                      src={myPost?.photo}
                      alt=""
                      className="w-20 h-20 rounded-lg"
                    />
                  </td>
                  <td className="p-3">
                    <p>{myPost?.postTitle}</p>
                  </td>
                  <td className="p-3">
                    <p>{myPost?.category}</p>
                  </td>
                  <td className="p-3">
                    <p>{new Date(myPost?.deadline).toLocaleDateString()}</p>
                  </td>
                  <td className="p-3">
                    <p>Dhaka,Bangladesh</p>
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex gap-2">
                      <Link to={`/updateMyPost/${myPost?._id}`}>
                        <button className="btn bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeletePost(myPost?._id)}
                        className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 hover:bg-gradient-to-br focus:ring-purple-300"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagePost;
