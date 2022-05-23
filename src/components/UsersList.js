import React from "react";

const UsersList = ({ users, selectUser, removeUser, isOpenModal }) => {
  return (
    <div className="container_list_user">
      <ul className="list_user">
        {users.map((user) => (
          <li className="list_user_li" key={user.id}>
            <div className="list_user_1">
              <h3>
                {user.first_name} {user.last_name}
              </h3>
            </div>
            <div className="list_user_2">
              <span>EMAIL</span>
              <h3> {user.email}</h3>
            </div>
            <div className="list_user_3">
              <span>BIRTHDAY</span>
              <h3>
                <i class="fa-solid fa-gift"></i> {user.birthday}
              </h3>
            </div>
            <div className="list_user_4">
              <button className="trash" onClick={() => removeUser(user.id)}>
                <i class="fa-solid fa-trash-can"></i>
              </button>
              <button
                className="pen"
                onClick={() => {
                  selectUser(user);
                }}
              >
                <i class="fa-solid fa-pen"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
