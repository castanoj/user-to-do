import axios from "axios";
import React, { useEffect, useState } from "react";

const UsersForm = ({ getUsers, selectUser, deselectUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (selectUser !== null) {
      setEmail(selectUser.email);
      setPassword(selectUser.password);
      setFirstName(selectUser.first_name);
      setLastName(selectUser.last_name);
      setBirthday(selectUser.birthday);
    } else {
      reset();
    }
  }, [selectUser]);

  const submit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      birthday: birthday,
    };
    if (selectUser !== null) {
      axios
        .put(`https://users-crud1.herokuapp.com/users/${selectUser.id}/`, user)
        .then(() => {
          getUsers();
          deselectUser();
        });
    } else {
      reset();
      axios
        .post("https://users-crud1.herokuapp.com/users/", user)
        .then(() => getUsers());
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setBirthday("");
  };

  return (
    <form onSubmit={submit}>
      <div className="first_name">
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          id="first_name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>

      <div className="last_name">
        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          id="last_name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>

      <div className="email">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className="password">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div className="birthday">
        <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          onChange={(e) => setBirthday(e.target.value)}
          value={birthday}
        />
      </div>

      <button className="button-click">Add New User</button>
    </form>
  );
};

export default UsersForm;
