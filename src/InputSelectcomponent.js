import React from 'react'

const InputSelectComponent = ({userData,onChange,value}) =>     
    (

    <div className="col-lg-6">
        <select className="form-control" onChange={(event) => onChange(event.target.value)}>
            {
                userData.map((user, index) => (
                    <option key = {index} value={user.id}>{user.id}</option>

                ))
            }
        </select>
    </div>
)
        


export default InputSelectComponent
