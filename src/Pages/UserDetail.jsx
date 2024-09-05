import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Detail</h1>
      <div className="bg-white shadow-md rounded flex flex-col gap-5">
        <h2 className="text-xl font-bold mb-4">{user.name}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <p>
          <strong>Address:</strong> {user.address.street}, {user.address.city}
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-4 rounded focus:outline-none focus:shadow-outline"
        >
          Back to User List
        </Link>
      </div>
    </div>
  );
};

export default UserDetail;
