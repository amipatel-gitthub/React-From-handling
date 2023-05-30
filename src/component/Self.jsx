import React, { useState } from 'react';

const Self = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = e => {
        e.preventDefault()
        console.log(email, password)
    }
    return (
        <div>
               <form onSubmit={submit}>
            <input
                name="email"
                type="email"
                onChange={event => setEmail(event.target.value)}
                value={email}
            />
            <input
                name="password"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <button>Submit</button>
        </form>
        </div>
    );
}

export default Self;

