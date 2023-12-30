import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        console.log(result.data);
        setUsers(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {users.map((users) => {
        return (
          <div key={users.id}>
            <table>
                      <tr>
                          <th>Name</th>
                          <th>Username</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Phone</th>
                          <th>Website</th>
                          <th>Company</th>
                      </tr>
                      <tr>
                          <td>{users.name}</td>
                          <td>{users.username}</td>
                          <td>{users.email}</td>
                          <td>{users.address.city}</td>
                          <td>{users.phone}</td>
                          <td>{users.website}</td>
                          <td>{users.company.name}</td>                
                    </tr>           
            </table>
          </div>
        );
      })}
    </div>
  );
}
export default UserList;
