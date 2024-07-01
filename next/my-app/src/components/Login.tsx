"use client"

const Login = () =>{
    const xyz = async ()=>{
        const apiRes = await fetch("http://localhost:8081/users/signin ",
        {
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                "email": "ak@gmail.com",
                "password": "1324"  
            })

        }
        )
        const apiResFinal = await apiRes.json();
    }
    return <button onClick={xyz}>Login</button>
}
export default Login