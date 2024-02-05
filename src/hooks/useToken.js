import { useEffect } from "react";
import { useState } from "react";

export const useAuth = () => {
    const [status, setStatus] = useState('');
    //const [color, setColor] = useState('');
    const {token, createToken} = useToken();

    useEffect(_=> {

    }, [status,token]);

    function authenticate() {
        const form = document.querySelector("#form");
        form.addEventListener("submit", (e) => e.preventDefault());

        const body = {
            email: form.email.value,
            password: form.password.value
        };

        window.fetch("http://localhost:18080/api/auth",
        {
            method: "post",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(response => {
            setStatus(response.message);
            createToken(response.data);
        })
        .catch(error => alert("Mensaje de error: " + error));
    }

    return {authenticate, status};
}

export const useToken = () => {
    const [token, setToken] = useState('');

    useEffect(_ => {
        verifiedToken()
    }, [token])
    
    function verifiedToken() {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        } else {
            setToken("");
        }
        
    }
    
    function createToken(tokenAuth) {
        localStorage.setItem("token",tokenAuth);
        verifiedToken();
        window.location.href="/";
    }
    
    function removeToken() {
        localStorage.removeItem("token");
        verifiedToken();
        window.location.href="/";
    }
    
    return {token, removeToken, createToken}
}
 




