import { useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const UsersForm = ({ getUsers, userSelected, deselected }) => {

    const { handleSubmit, register, reset } = useForm()

    const initialSelected = {
        first_name: "",
        last_name: "",
        birthday: "",
        email: "",
        password:""
    }

    const submit = (data) => {

        if (userSelected) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
                .then(() => {
                    deselected();
                    getUsers(
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'El usuario ha sido modificado correctamente',
                            showConfirmButton: false,
                            timer: 2500
                          }),
                    );   
                },
                
                  )
                .catch(error => console.log(error.response?.data))

        } else {
            axios.post('https://users-crud1.herokuapp.com/users/', data)
                .then(() => {
                   getUsers(
                    Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'El usuario ha sido creado correctamente',
                    showConfirmButton: false,
                    timer: 2500
                  }),
                  );  
                            
                })
                .catch(error => console.log(error.response?.data))
        }
        reset(initialSelected)
    }

    useEffect(() => {
        if (userSelected) {
            //alert('Cambiando')
            reset(userSelected)
        } else {
            reset(initialSelected)
        }
    }, [userSelected])




    return (
        <div style={{ margin: "0 auto" }}className="container">
            {/* <!-- Modal --> */}
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div style={{ width: "400px" }} className="modal-content">
                        <div className="modal-header">
                            <button   onClick={()=>{deselected()}} type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Create User</h4>
                        </div>
                        <form onSubmit={handleSubmit(submit)} action="">
                            <div className="modal-body">
                                <div className="input-names">
                                    <i className="fa-solid fa-user"></i>
                                    <input type="text" {...register('first_name')} id="first_name"placeholder='First name' />
                                    <input type="text" {...register('last_name')} id="last_name"placeholder='Last name' />
                                </div>
                                <div className="inputs">
                                    <div className="item">
                                        <i className="fa-solid fa-envelope"></i>
                                        <input type="text" {...register('email')} id="email"placeholder='Email' />
                                    </div>
                                    <div className="item">
                                        <i className="fa-solid fa-lock"></i>
                                        <input type="password" {...register('password')} id="password" placeholder='Password' />
                                    </div>
                                    <div className="item">
                                        <i className="fa-solid fa-cake-candles"></i>
                                        <input type="date" {...register('birthday')} id="birthday"/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success" >Create</button>
                                
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default UsersForm;