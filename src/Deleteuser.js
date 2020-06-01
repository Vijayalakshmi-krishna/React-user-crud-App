import React, { useState, useEffect } from 'react'
import ButtonComponent from './Buttoncomponent'

import InputSelectComponent from './InputSelectcomponent'
import LabelComponent from './Labelcomponent'

const DeleteUser = () => {
    const [id, setId] = useState(1)

    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/user")
            .then((res) => res.json())
            .then((data) => {
                setUserData(data);
                console.log(data)
            });
    }, []);


    const submit = e => {
        e.preventDefault()
        fetch(`http://localhost:3001/user/` + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        })
            .catch(error => console.error("Error: ", error))
            .then(() => console.log("Success:"));
    }

    return (

        <div className="container">
            <form onSubmit={submit}>

                <div className="row">
                    <LabelComponent text="ID" />
                    <InputSelectComponent userData={userData} value={id} onChange={(value) => setId(value)}></InputSelectComponent>

                </div>
                <div className="row">
                    <div className="col-lg-3">

                    </div>
                    <div className="col-lg-6">
                        <ButtonComponent text="Delete User"></ButtonComponent>
                    </div>
                </div>

            </form>
        </div>

    );
};


export default DeleteUser