"use client"

import { use, useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const final = () => {
        console.log("Email", email);
        console.log("Password", password);
    }
    
    return <div className="text-center mx-auto border border-solid bg-cyan-700 max-w-80 mt-24 rounded-xl">
        <h2 className="text-3xl text-green-500 font-bold mt-5">Sign In</h2><br />
        <span>First Name</span><br />
        <span>Last Name</span><br />
        <span className="">Email Id :</span><br />
        <input type="text" placeholder="Enter Your Email" onChange={(e) => { setEmail(e.target.value) }} /> <br /><br />
        <span>Password :</span><br />
        <input type="password" placeholder="Enter Your Password" onChange={(e) => { setPassword(e.target.value) }} /> <br /> <br />
        <div className="flex gap-5 justify-center">
            <button onClick={final} className="border bg-blue-200 p-2 mb-5 rounded text-blue-500">Submit</button>
        </div>
    </div>
}


export default Login