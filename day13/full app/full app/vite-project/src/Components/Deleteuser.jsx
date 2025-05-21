import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Deleteuser = ({ userId }) => {
    const handleDelete = () => {
        axios.delete(`http://localhost:8080/api/users/delete-user/${userId}`)
            // .then(() => {
            //     alert("User deleted successfully!");
            //     window.location.reload(); // Refresh to remove deleted user
            // })
            // .catch(() => {
            //     console.log("Error deleting user");
            // });
            .then(() => {
                            toast.success("User Deleted successfully!", {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            });
                        })
                        .catch(() => {
                            toast.error("Error adding user!", {
                                position: "top-right",
                                autoClose: 3000,
                            });
                        });
    };

    return (
        <button className="btn btn-danger mx-2" onClick={handleDelete}>
            Delete
        </button>
    );
};

export default Deleteuser;