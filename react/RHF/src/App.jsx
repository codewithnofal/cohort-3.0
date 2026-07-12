import { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  const [updatedUser, setUpdatedUser] = useState();

  const deleteUser = (id) => {
    let filteredUser = users.filter((user, index) => {
      return id !== index;
    });
    setUsers(filteredUser);
    localStorage.setItem("users", JSON.stringify(filteredUser));
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <UserForm
          updatedUser={updatedUser}
          users={users}
          setUsers={setUsers}
          setToggle={setToggle}
        />
      ) : (
        users.map((elem, ind) => {
          return (
            <UserCard
              setUpdatedUser={setUpdatedUser}
              setToggle={setToggle}
              deleteUser={deleteUser}
              ind={ind}
              user={elem}
            />
          );
        })
      )}
    </div>
  );
}
