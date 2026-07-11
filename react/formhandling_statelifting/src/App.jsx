import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-center gap-10 lg:flex-col">
        <UserForm setUsers={setUsers} />
       {
        users.map((elem) => {
          return <UserCard  val={elem} />
        })
       }
      </div>
    </div>
  );
};

export default App;
