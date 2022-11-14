import React from 'react';

const UsersList = ({ userList, selectUser, deleteUser }) => {
    return (
        <div className='user-container'>
            {userList.map(user => (
                <div className="user-item" key={user.id}>
                    <div className="title">
                        <h3>{user.first_name} {" "} {user.last_name}</h3>
                        <div className='icons'>
                            <a onClick={() =>selectUser(user)} data-toggle="modal" data-target="#myModal" href="#" className='icons-user-success'><i className="fa-solid fa-user-pen"></i></a>
                            <a onClick={()=>deleteUser(user.id)} href="#" className='icons-user-trash'><i className="fa-solid fa-trash-can"></i></a>
                        </div>
                    </div>
                    <p className='subtitle'>Birthday</p>
                    <p className='info'><i className="fa-solid fa-cake-candles"></i>{" "}{user.birthday}</p>
                    <p className='subtitle'>Email</p>
                    <p><i className="fa-solid fa-envelope"></i>{" "}{user.email}</p>

                </div>
            ))}
        </div>
    );
};

export default UsersList;