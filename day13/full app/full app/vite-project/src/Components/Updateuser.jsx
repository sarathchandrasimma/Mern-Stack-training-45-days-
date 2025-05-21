import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Updateuser = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [age, setAge] = useState(user.age);

    const handleUpdate = () => {
        const payload = { name, email, age };

        axios.put(`http://localhost:8080/api/users/update-user/${user._id}`, payload)
            // .then(() => {
            //     alert("User updated successfully!");
            //     window.location.reload(); // Refresh to show updated data
            // })
            // .catch(() => {
            //     console.log("Error updating user");
            // });
            .then(() => {
                            toast.success("User Updated successfully!", {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                            });
                        })
                        .catch(() => {
                            toast.error("Error Updating user!", {
                                position: "top-right",
                                autoClose: 3000,
                            });
                        });
    };

    return (
        <button className="btn btn-warning mx-2" onClick={handleUpdate}>
            Edit
        </button>
    );
};

export default Updateuser;