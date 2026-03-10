import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login(){

const navigate = useNavigate();

const [login,setLogin] = useState({
 email:"",
 password:""
});

const handleChange = (e)=>{
 setLogin({...login,[e.target.name]:e.target.value});
}

const handleSubmit = async (e)=>{
 e.preventDefault();

 const res = await loginUser(login);

 navigate("/result",{state:{message:res.data}});
}

return(

<div className="container mt-5">

<h2>Login</h2>

<form onSubmit={handleSubmit}>

<input name="email"
placeholder="Email"
className="form-control mb-2"
onChange={handleChange}/>

<input name="password"
placeholder="Password"
className="form-control mb-2"
onChange={handleChange}/>

<button className="btn btn-primary">
Login
</button>

</form>

</div>
);
}

export default Login;