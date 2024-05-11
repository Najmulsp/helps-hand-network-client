import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyReqestedPost = () => {
  const { user } = useContext(AuthContext);

  const [myRequestPosts, setMyRequestPosts] = useState([]);
  console.log(myRequestPosts)

  useEffect(() => {
    fetch(`http://localhost:5000/MyRequestPost/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyRequestPosts(data);
        console.log(data);
      });
  }, [user]);

  const handleCancelPost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteMyRequestPost/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = myRequestPosts.filter((myPost) => myPost._id !== id);
              setMyRequestPosts(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your post request has been cancelled.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <Helmet>
        <title>Home/ My Post</title>
      </Helmet>
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
      <div className="overflow-x-auto">
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
              <th className="p-3">Invoice #</th>
              <th className="p-3">Client</th>
              <th className="p-3">Issued</th>
              <th className="p-3">Due</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          
          {
                myRequestPosts.map(myRequestPost =>
                    <tbody key={myRequestPosts._id}>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<img src={myRequestPost.photo} alt="" className="w-20 h-20 rounded-lg"/>
					</td>
					<td className="p-3">
						<p>{myRequestPost.postTitle}</p>
					</td>
					<td className="p-3">
						<p>{myRequestPost.category}</p>
						
					</td>
					<td className="p-3">
						<p>{myRequestPost.deadline}</p>
						
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					<td className="p-3 text-right">
                        
                        <button onClick={() => handleCancelPost(myRequestPost._id)} className="btn btn-warning">Cancel</button>
                        
					</td>
				</tr>
			</tbody>
                )
            }
         
        </table>
      </div>
    </div>
  );
};

export default MyReqestedPost;
