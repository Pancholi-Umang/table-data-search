import React, { useState, useEffect } from "react";
const TableData = () => {
  const [data, setData] = useState("");
  const [user, setUser] = useState([]);

  
  const fetchDataApi = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  console.log(fetchDataApi);
  useEffect(() => {
    fetchDataApi();
  }, []);

  const SearchMyData = (e) => {
    setData(e.target.value);
    // const filteredData = user.filter((e1) =>
    //   e1.name.toLowerCase().includes(data.toLowerCase()));


    // if (data === "") {
    //   setUser([]);
    // } else {
    //   setUser(filteredData)
    // }
  };

  return (
    <div className="container mt-4">
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Search here…"
        onChange={SearchMyData}
        value={data}
      />
      <table className="table text-center">
        <thead>
          <tr className="table-dark">
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.filter((e1)=>e1.name.toLowerCase().includes(data.toLowerCase())).map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>
                <td>
                  <button className="border-0 btn-success">Edit</button>
                </td>
                <td>
                  <button className="border-0 btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
