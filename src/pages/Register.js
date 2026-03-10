import { useState } from "react";
import { registerUser } from "../services/authService";

function Register() {

 const [user,setUser] = useState({
  name:"",
  email:"",
  password:"",
  age:""
 });

 const handleChange = (e)=>{
   setUser({...user,[e.target.name]:e.target.value});
 }

 const handleSubmit = async (e)=>{
   e.preventDefault();

   const res = await registerUser(user);
   alert(res.data);
 }

 return (

<div className="container mt-5">

<h2>Register</h2>

<form onSubmit={handleSubmit}>

<input name="name" placeholder="Name"
className="form-control mb-2"
onChange={handleChange}/>

<input name="email" placeholder="Email"
className="form-control mb-2"
onChange={handleChange}/>

<input name="password" placeholder="Password"
className="form-control mb-2"
onChange={handleChange}/>

<input name="age" placeholder="Age"
className="form-control mb-2"
onChange={handleChange}/>

<button className="btn btn-success">Register</button>

</form>

</div>
 );
}

export default Register;