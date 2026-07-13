import { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  const [updatedUser, setUpdatedUser] = useState()

  const handleDelete = (id) => {
    let filteredUser = users.filter((u) => {
      return u.id !== id;
    });
    setUsers(filteredUser);
    localStorage.setItem("users", JSON.stringify(filteredUser));
  };

  console.log(users);
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <UserForm updatedUser={updatedUser} users={users} setUsers={setUsers} setToggle={setToggle} />
      ) : (
        users.map((user) => {
          return (
            <UserCard
              key={user.id}
              handleDelete={handleDelete}
              setUpdatedUser={setUpdatedUser}
              user={user}
              setToggle={setToggle}
            />
          );
        })
      )}
    </div>
  );
}
