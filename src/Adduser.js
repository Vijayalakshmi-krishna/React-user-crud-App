import React, { useState } from 'react'
import InputComponent from './Inputcomponent'
import ButtonComponent from './Buttoncomponent'
import LabelComponent from './Labelcomponent'

const AddUser = () => {

    const [id, setId] = useState(1)
    const [name, setName] = useState("")
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");

    const data = {
        "id": id,
        "name": name,
        "age": age,
        "email": email
    }
    const submit = e => {
        e.preventDefault()
        fetch(`http://localhost:3001/user`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .catch(error => console.error("Error: ", error))
            .then(response => console.log("Success: ", JSON.stringify(response)));
    }

    return (
        <form onSubmit={submit}>
            <div className="container">
                <div className="row">

                    <LabelComponent text="Id" />
                    <InputComponent type="number" value={id} onChange={(value) => setId(value)} />

                </div>
                <div className="row">

                    <LabelComponent text="Name" />
                    <InputComponent type="text" value={name} onChange={(value) => setName(value)} />

                </div>
                <div className="row">

                    <LabelComponent text="Age" />
                    <InputComponent type="number" value={age} onChange={(value) => setAge(value)} />

                </div>
                <div className="row">

                    <LabelComponent text="Email" />
                    <InputComponent type="email" value={email} onChange={(value) => setEmail(value)} />

                </div>
                <div className="row">

                    <div className="col-lg-3">

                    </div>

                    <div className="col-lg-6">
                        <ButtonComponent text="Add User" />
                    </div>

                </div>
            </div>
        </form>



    )
}
export default AddUser