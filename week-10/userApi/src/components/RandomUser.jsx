import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../solution/RandomUser.css"
const RandomUser = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=5`
        );
        setUsers((prevUser) => [...prevUser, ...response.data.results]);
      } catch (e) {
        console.error("Error fetching users", e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, [page]);

  const loadMoreUsers = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <div className="random-user-container">
      <h1>random User</h1>
      <div className="users-list">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
              className="user-image"
            />
            <h2>{user.name.first} {user.name.last}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      {loading && <p className="loading-text">Loading...</p>}
      <button className="load-more-button" onClick={loadMoreUsers}>Load more user</button>
    </div>
  );
};

export default RandomUser;
