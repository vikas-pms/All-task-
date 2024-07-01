"use client"
import { useState } from "react";
const Createpost= () => {
  const [tittle, setTittle] = useState("");
  const [body, setbody] = useState("");
  const [userid,setUserid ] = useState("");
  const Submit = async ()=>{
     const apiRes = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: tittle ,
        body: body,
        userId: userid,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }
   return <div>
    <input type="text" onChange={(e)=>setTittle(e.target.value)}  /> <br />
    <input type="text" onChange={(e)=>setbody(e.target.value)} /> <br />
    <input type="text" onChange={(e)=>setUserid(e.target.value)} /> <br />
      <button onClick={Submit}> Submit</button>
   </div>
}
export default Createpost