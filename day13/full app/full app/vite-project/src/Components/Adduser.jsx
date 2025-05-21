// import axios from 'axios'
// import React, { useState } from 'react'


// const AddUser = () => {
//     const [name,setName] = useState("")
//     const [email,setEmail] = useState("")
//     const [age,setAge] = useState(0)

//    const handleSubmit =(e)=>{
//     e.preventDefault()
//     const payload= {name,email,age}
//     axios.post("http://localhost:8080/api/users/add-user",payload)
//     .then(()=>{
//         alert("user added")
//          console.log("User Added Successfully");
//         window.location.reload(); // Refresh the data

//     })
//     .catch(()=>{
//         console.log("error adding user")
//     })
//    }

//   return (
//     <div className="container mt-4">
//       <form className="d-flex gap-3 align-items-center border p-3 rounded shadow" onSubmit={handleSubmit}>
//         <label className="fw-bold">Name:</label>
//         <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />

//         <label className="fw-bold">Age:</label>
//         <input type="number" className="form-control" value={age} onChange={e => setAge(e.target.value)} />

//         <label className="fw-bold">Email:</label>
//         <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />

//         <button type="submit" className="btn btn-primary px-4 py-2">Submit</button>
//       </form>
//     </div>


//   )
// }
// export default AddUser;

import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { name, email, age };

        axios.post("http://localhost:8080/api/users/add-user", payload)
            .then(() => {
                toast.success("User added successfully!", {
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
            // window.location.reload();
    };

    return (
        <div className="container mt-4">
            <form className="d-flex gap-3 align-items-center border p-3 rounded shadow" onSubmit={handleSubmit}>
                <label className="fw-bold">Name:</label>
                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                <label className="fw-bold">Age:</label>
                <input type="number" className="form-control" value={age} onChange={e => setAge(e.target.value)} />
                <label className="fw-bold">Email:</label>
                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                <button type="submit" className="btn btn-primary px-4 py-2">Submit</button>
            </form>
        </div>
    );
};

export default AddUser;