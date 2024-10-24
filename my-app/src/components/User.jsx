import React, {useEffect, useState} from "react";

export function User() {
    const [users, serUsers] = useState([]);
    const {loading, setloading} = useState(true);
    const {error, SetError} = useState(null);

    useEffect( () => {
       const fetchUser = async () => {
            try {
                    const response = await fetch("https://jsonplaceholder.typicode.com/users");
                    if (!response.ok){
                        throw new Error('La respuesta no fue la esperada')
                    }
                    const data = await response.json();
                    serUsers(data);

                } catch (error) {
                        SetError(error.message)
                        console.log("Entro en el catch", error);
                    }
                finally {
                        setloading(false);
                    }
                }
            fetchUser();
    //}, [] ); aqui hay un warning que no se que es.... todo esto fue hecho con el vido 39
    }, []);
    
    if (loading) return <div>Cargando...</div>
    if (error) return <div>Error: {error}</div>
    return (
        <ul>
            {users.map( user => (
                <li key={user.id} >
                    {user.name} -{user.email}
                </li>
            )) }
        </ul>
    );
  }

