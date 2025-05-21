// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Table from 'react-bootstrap/Table';
// import Updateuser from './Updateuser';
// import Deleteuser from './Deleteuser';
// import { Link } from 'react-router';
// const GetUsers = () => {

//     const [users,setUsers] = useState([])

//     useEffect(()=>{
//         axios.get('http://localhost:8080/api/users/get-users')
//     .then((res)=>{
//        console.log(res.data)
//        setUsers(res.data)
//     })
//     .catch(()=>{
//        console.log("Error in Fetching data")
//     })

//     },[])

//   return (
//     <div>
//       <div>
//         {/* I want a field to add data to data base */}
//       </div>
        
//            <Table striped bordered hover>
//              <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Age</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((i,index)=>(
//         <tr key={index}>
//           <td>{i.name}</td>
//           <td>{i.email}</td>
//           <td>{i.age}</td>
//           <td><button onClick={Updateuser}>
//             Edit</button><h1> </h1> <button  onClick={Deleteuser}>Delete</button></td>
//         </tr>
//         ))}
//       </tbody>
//       </Table>
        
//     </div>
//   )
// }

// export default GetUsers;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Updateuser from './Updateuser';
// import Deleteuser from './Deleteuser';

// const GetUsers = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8080/api/users/get-users')
//             .then((res) => {
//                 console.log(res.data);
//                 setUsers(res.data);
//             })
//             .catch(() => {
//                 console.log("Error in Fetching data");
//             });
//     }, []);

//     return (
//         <div className="container mt-4">
//             <h2 className="mb-3 text-center">User List</h2>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Age</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user, index) => (
//                         <tr key={index}>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.age}</td>
//                             <td>
//                                 <Updateuser user={user} />
//                                 <Deleteuser userId={user._id} />
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default GetUsers;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Deleteuser from './Deleteuser';

const GetUsers = () => {
    const [users, setUsers] = useState([]);
    const [editableUserId, setEditableUserId] = useState(null);
    const [updatedData, setUpdatedData] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/api/users/get-users')
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            })
            .catch(() => {
                console.log("Error in Fetching data");
            });
    }, []);

    const handleEditClick = (user) => {
        setEditableUserId(user._id);
        setUpdatedData({ name: user.name, email: user.email, age: user.age });
    };

    const handleChange = (e, field) => {
        setUpdatedData({ ...updatedData, [field]: e.target.value });
    };

    const handleUpdate = (userId) => {
        axios.put(`http://localhost:8080/api/users/update-user/${userId}`, updatedData)
            .then(() => {
                alert("User updated successfully!");
                setEditableUserId(null);
                window.location.reload(); // Refresh the data
            })
            .catch(() => {
                console.log("Error updating user");
            });
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3 text-center">User List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>
                                {editableUserId === user._id ? (
                                    <input 
                                        type="text" 
                                        value={updatedData.name} 
                                        onChange={(e) => handleChange(e, 'name')} 
                                        className="form-control"
                                    />
                                ) : (
                                    user.name
                                )}
                            </td>
                            <td>
                                {editableUserId === user._id ? (
                                    <input 
                                        type="email" 
                                        value={updatedData.email} 
                                        onChange={(e) => handleChange(e, 'email')} 
                                        className="form-control"
                                    />
                                ) : (
                                    user.email
                                )}
                            </td>
                            <td>
                                {editableUserId === user._id ? (
                                    <input 
                                        type="number" 
                                        value={updatedData.age} 
                                        onChange={(e) => handleChange(e, 'age')} 
                                        className="form-control"
                                    />
                                ) : (
                                    user.age
                                )}
                            </td>
                            <td>
                                {editableUserId === user._id ? (
                                    <button className="btn btn-success mx-2" onClick={() => handleUpdate(user._id)}>
                                        Save
                                    </button>
                                ) : (
                                    <button className="btn btn-warning mx-2" onClick={() => handleEditClick(user)}>
                                        Edit
                                    </button>
                                )}
                                <Deleteuser userId={user._id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default GetUsers;