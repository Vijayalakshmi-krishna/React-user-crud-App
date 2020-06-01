import React, { useState, useEffect } from 'react'




const ViewUser = () => {
    const [userData, setuserData] = useState([]);

    
    // const routes = {
    //     "'/edit/:id'": () => <EditUser/>,
    //     "'/delete/:id'": () => <DeleteUser />
    // };

    useEffect(() => {
        fetch("http://localhost:3001/user")
            .then((res) => res.json())

            .then((data) => {

                setuserData(data);
            });
    }, []);



    return (
        <div className=".container">
           
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                            userData.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>                                   
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    
                                </tr>

                            ))
                        }


                    </tbody>

                </table>
        </div>
    )
}


export default ViewUser