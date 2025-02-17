import React from 'react';

export default function nvkJsxExpression() {
    // Biến 
    const name = "Nguyễn Văn Khải";
    // Biến đối tượng
    const user = {
        firstName: "Văn",
        lastName: "Khải",
    };
    // Hàm 
    const fullName = (user) => {
        return <h2>{user.firstName + ' ' + user.lastName}</h2>;   
    };

    // Element
    const element = (
        <div>
            {/* Biểu thức JSX */}
            {fullName(user)}
            <hr />
            <h3>Welcome to, {name}</h3>
        </div>
    );
    // Hàm
    const sayWelcome = (user) => {
        if (user) {
            return <h3>Welcome to, {user}</h3>;
        } else {
            return <h3>Welcome to FIT-NTU - K23CNT2</h3>;
        }
    };
    return (
        <div>
            <h1>NVK - JSX Expression</h1>
            {/* Use element */}
            {element}

            <hr />
            {sayWelcome(name)}
            <hr />
            {sayWelcome("Admin Khải - FIT-NTU")}  
        </div>
    );
}