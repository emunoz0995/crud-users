import { useState, useEffect } from 'react'
import UsersList from './assets/components/UsersList'
import './App.css'
import Nav from './assets/components/Nav'
import axios from 'axios'
import UsersForm from './assets/components/UsersForm'

function App() {

  const [userList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState(null)
 

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUserList(res.data));
  }


  const selectUser = (user) => {
    setUserSelected(user);
  }

  const deselected = () => setUserSelected(null);

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(
        () => getUsers(
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'El usuario ha sido eliminado',
            showConfirmButton: false,
            timer: 2500
          }),
        ),
        
      
      )
  };


  return (
    <div className="App">
      <Nav />
      <UsersList
        deleteUser={deleteUser}
        selectUser={selectUser}
        userList={userList}
      />
      <UsersForm
        getUsers={getUsers}
        deselected={deselected}
        userSelected={userSelected}
      />

    </div>
  )
}

export default App
