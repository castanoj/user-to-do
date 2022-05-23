import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal();
  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const removeUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };

  const selectUser = (user) => setSelectedUser(user);

  const deselectUser = () => setSelectedUser(null);

  return (
    <div className="App">
      <div className="header">
        <h1>Users</h1>
        <button className="button_user" onClick={openModal}>
          <span>
            <i class="fa-solid fa-circle-plus"></i>
          </span>{" "}
          New User
        </button>
      </div>

      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <UsersForm
          getUsers={getUsers}
          selectUser={selectedUser}
          deselectUser={deselectUser}
        />
      </Modal>

      <UsersList
        users={users}
        selectUser={selectUser}
        removeUser={removeUser}
        isOpen={isOpenModal}
      />
    </div>
  );
}

export default App;
