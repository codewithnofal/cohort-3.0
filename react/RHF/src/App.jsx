import { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);
  console.log(users);
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <UserForm setUsers={setUsers} setToggle={setToggle} />
      ) : (
        users.map((elem) => {
          return <UserCard  user={elem} />;
        })
      )}
    </div>
  );
}
