import React, { useCallback, useMemo, useRef, useState } from "react";

const App = () => {
    let email = useRef(null)
    let password = useRef(null)
    const [error, setError] = useState({
        email: "",
        password: ""
    })

    let userCred = useMemo(() => {
        return { email: "abc@gmail.com", password: "12" }
    }, [])

    function validateForm(email, password) {
        let valid = true
        if (userCred.email !== email) {
            setError(prev => {
                return { ...prev, email: "User not found" }
            })
            valid = false
        }
        if (userCred.password !== password) {
            setError(prev => {
                return { ...prev, password: "Password Incorrect" }
            })
            valid = false
        }
        return valid
    }

    function handleSubmit(e) {
        e.preventDefault()
        setTimeout(() => {
            if (validateForm(email.current.value, password.current.value)) {
                setError({
                    email: "",
                    password: ""
                })
                console.log("Logged In Successfully")
                email.current.value = ""
                password.current.value = ""
            }
        }, 4000)
    }

    //console.log(error)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="input-email" ref={email} type="text" placeholder="Enter your email" />
                <br />
                {error.email && <span id="user-error" style={{ color: "red" }}>{error.email}</span>}
                <br />
                <input id="input-password" ref={password} type="password" placeholder="Enter your password" />
                <br />
                {error.password && <span id="password-error" style={{ color: "red" }}>{error.password}</span>}
                <br />
                <button id="submit-form-btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App